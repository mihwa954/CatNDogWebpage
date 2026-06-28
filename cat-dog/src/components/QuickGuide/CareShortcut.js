import { POPUP_DATA } from "./POPUPDATA";
import PopUp from "./PopUp";
import useModal from "../../hook/useModal";
import styled from "styled-components";
import QuickGuideTitle from "./QuickGuideTitle";
import ModalTitleIcon from "./ModalTitleIcon";

function CareShortcut() {
  //모달창의 처음 세팅값은 false로 해주고 set을 누르면 true가 되어서 나타나게 한다
  //그렇게 하면 안되었다
  const { isOpen, open, close } = useModal();

  //https://dev-ini.tistory.com/90  모달창 참고자료
  //https://mongsira.tistory.com/52 모달창 참고자료
  //https://velog.io/@phrygia/2021-09-21-react-modal 모달창 참고자료
  //https://cocoon1787.tistory.com/875 모달창 참고자료(커스텀 훅을 사용해서 상태관리)

  return (
    <CareShortcutWrapper>
      <QuickGuideTitle />

      <ModalWrapper>
        {POPUP_DATA.map((item) => (
          <ModalContainer key={item.id} onClick={() => open(item)}>
            {/* 클릭을 했을 때 팝업창이 나온다 */}
            {/* 클릭을 했을 때 open 함수가 발동하면서 map안에 있는 item 중에 클릭한 item 하나만 open에 전달해서 isOpen에 저장한다 */}

            <ModalTitleIcon item={item} />
            {/* map을 돌려서 컴포넌트를 분리 할 때에는 컴포넌트에 map에 들어가는 아이템을 꼭 넘겨주자
           자주 실수 하는 것들은 메모해서 기억 할때까지 적기 */}
          </ModalContainer>
        ))}

        {isOpen && <PopUp item={isOpen} close={close} />}

        {/* &&: 앞에 있는 것이 참이면 뒤에것을 실행한다
      즉!! isOpen은 현재 null이다 그래서 popup 컴포넌트에 사용자가 클릭한 값이 있다면 그것을 보여주고
      다시, 사용자가 클릭을 해서 isOpen에 값이 있다면 PopUp을 렌더링 하고 PopUp안에 닫기 버튼을 클릭하면 다시 null을 뱉어라 라는 뜻이다 */}
        {/* item이 open인 이유는 아까 만든 커스텀훅에서 매개변수로 item을 넘겨줬기 때문에 그것을 찾아서 보여준다 */}
        {/* 모달이 true일 때는 PopUp컴포넌트가 렌더링이 되면서 팝업을 표시한다
      setModalOpen이 팝업컴포넌트에도 있으니 닫기 버튼도 가능해진다
      그래서 false가 되면 팝업창을 null로 반환을 시켜라는 것이다 */}
      </ModalWrapper>
    </CareShortcutWrapper>
  );
}

//스타일을 계속 적용하다보면 stacking context(쌓임 맥락) 이라는 것이 생긴다
//현재 모달창의 z-index를 조절하려고 했는데 나는 모달창 자체에 순서를 조절하려고 했는데 안되었다
//같은 부모를 가지고 있다면 그 안에서 순서를 정리할 수 있지만 부모가 다르니 서열정리가 되지 않았다
//그래서 모달창의 부모를 찾아서 z-index를 주었다
//순서를 정할 때에는 부모를 잘 찾아서 적용시켜주자

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const CareShortcutWrapper = styled.div`
  z-index: 1;
`;

//빠른 도움말 박스
export const ModalContainer = styled.div`
  border-radius: 25px;
  background: #f4f1f1;
  padding: 10px 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-size: 20px;
`;

export default CareShortcut;
//우선은 팝업창에 들어갈 내용들은 변하지 않는 데이터다(나중에 일정관리 부분은 변할 수 있지만 우선은 상수로 두자)
//그러면 팝업창의 데이터들을 배열로 관리해서 이곳에서 map을 돌려서 꺼내오도록 하자
//그 다음으로 클릭을 하면 팝업창이 떠야하니 클릭 이벤트를 두자
//useState를 사용해서 초기값을 false로 두고 클릭을 했을 때 팝업창이 뜨도록 하자
//그 다음으로 클릭을 하면 어떤 창이 떠야한다
//그렇다면 모달의 내용을 담을 컴포넌트를 하나 만든다
//
