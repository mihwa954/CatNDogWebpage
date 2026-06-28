import Button from "../images/Button.png";
import styled from "styled-components";

function PlusButton({ onClick }) {
  return (
    <ButtonWrapper onClick={onClick}>
      <img src={Button} alt="" />
      <span>새 채팅</span>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  padding: 4px;
  margin: 0;
  background: none;
  display: flex;
  align-items: center;
  margin-top: auto;
  justify-content: flex-end;
`;
export default PlusButton;
