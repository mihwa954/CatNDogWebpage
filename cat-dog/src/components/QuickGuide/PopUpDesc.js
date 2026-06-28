import styled from "styled-components"

function PopUpDesc({item}){

    return(
        <DescWrapper> {item.desc} </DescWrapper>
    )
}

//<pre> 내가 배열안에서 줄바꿈한 그대로 출력이 된다
const DescWrapper = styled.pre`
  line-height: 35px;
  font-weight: bold;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
`;

export default PopUpDesc