import PetDashboard from "../PetWrapper/PetDashboard";
import CareShortcut from "../QuickGuide/CareShortcut";
import HospitalPage from "../HospitalSection/HospitalPage";
import styled from "styled-components";
function MyPage() {
  return (
    <MyPagewrapper>

      <PetDashboard />
      <CareShortcut />
      <HospitalPage />
      
    </MyPagewrapper>
  );
}

const MyPagewrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  height: 100%;
`;

export default MyPage;
