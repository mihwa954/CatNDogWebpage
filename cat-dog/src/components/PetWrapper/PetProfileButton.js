import { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/userAtom";
import VIEWDETAIL_DATA from "./VIEWDETAIL_DATA.js";

function PetProfileButton() {
  // const [viewDetail, setViewDetail] = useState(null);
  //건강기록 상세보기르 클릭 할 때 나타나면 좋을 거 같은것이 사용자가 입력한 할일 목록이다
  //그래서 우선은 사용자의 할일 목록을 임의로 배열로 나열해서 이곳에서 map을 돌려서 나오게 할 것이다
  //사용자가 버튼을 클릭 했을 때 모달창이 구현되도록 만들것이고 데이터는 다 만들었다
  //이제 map을 돌려서 클릭이벤트만 달아주면 된다

  const [isDetailOpen, setisDetailOpen] = useState(false);
  const openModal = () => setisDetailOpen(true);
  const closeModal = () => setisDetailOpen(false);

  const userInfo = useRecoilValue(userAtom);

  if (!userInfo) {
    return (
      <ButtonWrapper>
        <PetProfileInfoButton>가입이 필요합니다</PetProfileInfoButton>
      </ButtonWrapper>
    );
  }

  return (
    <>
      <ButtonWrapper>
        <PetProfileInfoButton onClick={openModal}>
          건강기록 상세보기
        </PetProfileInfoButton>
      </ButtonWrapper>

      {isDetailOpen && (
        <ModalWrapper>
          <ModalListWrapper>
            {VIEWDETAIL_DATA.map((list) => (
              <ListWrapper key={list.id}>
                <PastDateWrapper> {list.pastDate}</PastDateWrapper>
                <ScheduledNDate>
                  <ScheduledWrppaer> {list.scheduled}</ScheduledWrppaer>
                  <DateWrapper> {list.date}</DateWrapper>
                </ScheduledNDate>
              </ListWrapper>
            ))}
          </ModalListWrapper>

          <PupUpButton onClick={closeModal}>닫기</PupUpButton>
        </ModalWrapper>
      )}
    </>
  );
}

const DateWrapper = styled.div`
  font-size: 15px;
  color: #696868;
  padding-top: 5px;
`;

const ScheduledWrppaer = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #605b51;
`;

const ScheduledNDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PastDateWrapper = styled.div`
  font-size: 0.8rem;
  color: #696868;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 7px;
`;
const PupUpButton = styled.button`
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
  margin-top: auto;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 10px;
  top: 30%;
  left: 35%;
  z-index: 1000;
  background: #ffffff;
  padding: 10px;
  border-radius: 20px;
  width: 30rem;
  height: 27rem;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;
const ModalListWrapper = styled.div`
  overflow-y: auto;
  width: 90%;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PetProfileInfoButton = styled.button`
  align-self: flex-end;
  color: #ffffff;
  border-radius: 30px;
  background: #4d4438;
  padding: 10px;
  width: 400px;
`;

export default PetProfileButton;
