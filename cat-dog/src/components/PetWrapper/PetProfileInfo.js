import styled from "styled-components";
import PetInfoList from "./PetInfoList";
import PetName from "./PetName";
import PetProfileButton from "./PetProfileButton";

function PetProfileInfo() {
  return (
    <PetProfileInfoWrapper>
      <PetName />
      <PetInfoList />
      <PetProfileButton />
    </PetProfileInfoWrapper>
  );
}

const PetProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 30px;
`;

export default PetProfileInfo;
