import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import Background from "../images/Background.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userAtom } from "../../store/userAtom";
import { useEffect, useRef, useState } from "react";

//https://velog.io/@jiho1024/useRef%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%AA%A8%EB%8B%AC-%EB%B0%96-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EB%AA%A8%EB%8B%AC-%EC%B0%BD-%EB%8B%AB%EA%B8%B0-%EA%B5%AC%ED%98%84
//useRef를 활용한 모달 밖 클릭시 모달창 닫기 구현

function NavIcons() {
  const userInfo = useRecoilValue(userAtom);
  const resetUser = useResetRecoilState(userAtom);
  const navigate = useNavigate();
  const closeOutSide = useRef();
  const [showUserModal, setShowUserModal] = useState(null);

  const handleLogOut = () => {
    resetUser();
    navigate("/");
  };

  const handleDeActiveModal = (event) => {
    if (
      showUserModal &&
      (!closeOutSide.current || !closeOutSide.current.contains(event.target))
    ) {
      setShowUserModal(null);
    }
  };

  //useRef는 리액트 함수형 컴포넌트에서 참조를 생성하는 훅이다 이 훅은 렌더링이 될 때마다 동일한 참조 객체를 반환한다
  //주로 DOM 요소에 직접 접근하거나 컴포넌트의 재렌더링을 유발하지 않는 변수를 사용할 수 있다
  //그럼 언제 사용할까? 특정 dom요소에 접근해 포커스를 설정하거나 스크롤 위치를 조절하는 등의 작업이 필요할 때나 렌더링이 반복되더라도 초기화되지 않고 유지되어야 하는 값을 관리할 때 사용한다
  //내가 구현하고 싶은 것은 모달창이 나타나면 배경을 아무대나 클릭했을 때 모달창이 닫히게 하고싶다
  //useRef는 초기값을 인수로 받아서 current 속성을 가진 객체를 반환한다 이 current속성에 값을 저장할 수 있고 이 값은 컴포넌트가 리렌더링이 되더라도 유지가된다
  //

  useEffect(() => {
    window.addEventListener("click", handleDeActiveModal);
    return () => {
      window.removeEventListener("click", handleDeActiveModal);
    };
  }, [handleDeActiveModal]);

  //프로필을 선택했을 때 상태가 반전되게 만들어서 프로필을 클릭하면 열리고 또 클릭하면 닫히게
  const toggleModal = () => {
    setShowUserModal(!showUserModal);
  };

  //로컬스토리지에 담긴 사용자의 정보를 보여주길 원한다
  //프로필 이미지를 클릭 하면 userAtom내부에 있는 사용자의 정보를 가져와서 보여주면 좋겠다

  return (
    <>
      {userInfo?.id ? (
        //userInfo.id를 뱉어내라고 하니 당연히 null.id를 뱉으라고 인식을 해서 컴퓨터가 에러가 나는것이다
        //null인 상태에서도 가져올 수 있도록 만들어주는것이 옵셔널 체이닝이라고 한다
        //?.은 앞에있는 것이 있는지 먼저 확인을 하고 있으면 뒤에것을 뱉어내는 것이다
        //아톰의 초기 상태는 null이다 null은 그냥 값이 없는거다 그래서 없는걸 뱉으라니 배째라는 식으로 에러를 뿜은 것이다
        //하지만 ?.을 사용하면 undefined가 뜨기 때문에 자리는 있지만 없는 상태이기 때문에 조용히 넘어간다 즉, 귀찮아지기 싫으니 넘어가는 것이다
        <ButtonWrapper onClick={toggleModal}>
          <img src={Background} alt="" />
        </ButtonWrapper>
      ) : (
        <SignUpButtonWrapper onClick={() => navigate("/signup")}>
          가입이 필요합니다
        </SignUpButtonWrapper>
      )}

      {showUserModal && (
        <ModalWrapper ref={closeOutSide}>
          <div>
            <ModalImgWrapper>
              <img src={Background} alt="" />
            </ModalImgWrapper>
          </div>

          <div>
            <SpanWrapper>
              안녕하세요 <NameSpanWrapper>{userInfo?.이름}</NameSpanWrapper>님
            </SpanWrapper>
          </div>

          <ModalButtonWapper>
            <ModalButton onClick={handleLogOut}>로그아웃</ModalButton>
          </ModalButtonWapper>
        </ModalWrapper>
      )}
    </>
  );
}

//제일 마지막에 들어온 사람. 시간을 가지고 랜덤?

//kmo8797gu5fytg89 ->uuid
//이제 사용자의 id를 가지고 있으니 그 id값에 따라서 사용자의 정보를 어떻게 모달창에 띄울지 생각을 해보자
//우선은 사용자가 회원이 아니면 "로그인이 필요합니다"라는 문구를 띄우게 했다
//그러면 회원일 때 이미지를 클릭하면 모달이 뜨도록 해야겠다
//이전에 모달창을 만들어둔 것을 참고해서 useState로 사용하면 될 듯

const ModalWrapper = styled.div`
  position: absolute;
  top: 80%;
  width: 17rem;
  height: 15rem;
  right: 1%;
  padding: 10px;
  background-color: #ffffff;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ModalImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;
`;
const SpanWrapper = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #454040;
`;

const NameSpanWrapper = styled.span`
  font-size: 17px;
`;

const ModalButton = styled.button`
  font-size: 15px;
  font-weight: bold;
  width: 8rem;
  height: 2rem;
  background: none;
  border: 1px solid #605b51;
  border-radius: 20px;
  &:hover {
    background: #605b51;
    color: #fff;
  }
`;

const ModalButtonWapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SignUpButtonWrapper = styled.button`
  background: none;
  font-size: 18px;
`;

const ButtonWrapper = styled.button`
  background: none;
`;
const Imgwrapper = styled.div``;

export default NavIcons;
