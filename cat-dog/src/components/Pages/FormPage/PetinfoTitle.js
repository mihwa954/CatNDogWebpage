import styled from "styled-components";

function PetinfoTitle(){
    return <PetinfoTitleWrapper>반려동물정보입력</PetinfoTitleWrapper>
}


const PetinfoTitleWrapper = styled.h1`
  margin-bottom: 30px;
  background: #c8975a;
  border-radius: 10px;
  width: 800px;
  padding: 10px;
  color: #ffffff;
`;


export default PetinfoTitle