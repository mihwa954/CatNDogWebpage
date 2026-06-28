import styled from "styled-components";
import Frame from "../images/Frame.png";
import useUserInput from "../../hook/useUserInput";

function EnterButton() {
  const { send } = useUserInput();
  return (
    <ButtonWrapper onClick={() => send()}>
      <img src={Frame} alt="" />
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  padding: 4px;
  background: none;
`;

export default EnterButton;
