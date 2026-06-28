import styled from "styled-components";
import PetProfileImage from "./PetProfileImage";
import PetProfileInfo from "./PetProfileInfo";

function PetProfile() {
  return (
    <MyPageWrapper>
      <PetProfileImage />
      <PetProfileInfo />
    </MyPageWrapper>
  );
}

const MyPageWrapper = styled.div`
  padding: 0px 30px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 12px 40px 0 rgba(49, 51, 44, 0.04);
  display: flex;
  flex-direction: row;
`;

export default PetProfile;
