import styled from "styled-components";

function PetInfoBoxes(){
    return(
        
      <PetInfoBoxWrapper>
        <PetInfoBox>
          <span>최근 몸무게</span>
          <PetInfoBoxText>28.4kg</PetInfoBoxText>
        </PetInfoBox>

        <PetInfoBox>
          <span>다음 백신</span>
          <PetInfoBoxText>D-15</PetInfoBoxText>
        </PetInfoBox>
      </PetInfoBoxWrapper>
      
    )
}

const PetInfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 30px;
`;


const PetInfoBox = styled.div`
  background: #f4f4ec;
  padding: 16px;
  line-height: 30px;
  width: 200px;
  column-gap: 20px;
  height: 100px;
`;

const PetInfoBoxText = styled.h3`
  color: #845500;
`;

export default PetInfoBoxes