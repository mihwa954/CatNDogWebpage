import styled from "styled-components";


function PopUpCloseButton({close}){
    return (
        <CloseButton onClick={close}>X</CloseButton>
    )
}


//닫기 버튼
const CloseButton = styled.button`
  border-radius: 100px;
  background: #ffeac4;
  width: 45px;
  height: 45px;
  color: #4d4438;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  position: absolute;
  left: 90%;
  top: 5%;
`;


export default PopUpCloseButton