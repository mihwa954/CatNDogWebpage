import PetProfile from "./PetProfile";
import ChatHistoryContainer from "../ChatHistoryListWrapper/ChatHistoryContainer";
import styled from "styled-components";
//이 페이지는 반려동물의 프로필과 ai대화 기록내용을 담는 페이지이다
function PetDashboard() {
  
  return (
    <PetDashboardWrapper>
      <PetProfile />
      <ChatHistoryContainer />
    </PetDashboardWrapper>
  );
}
const PetDashboardWrapper = styled.div`
  display: flex;
  gap: 50px;
  
  @media screen and (max-width: 768px) {
   flex-direction: column;
   align-items: center;
  }
`;
export default PetDashboard;
