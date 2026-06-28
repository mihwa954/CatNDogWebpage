import styled from "styled-components";

function DeleteChatButton() {
  return <ButtonWrapper>전체 이력 삭제</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  background: none;
  cursor: pointer;
  margin-right: auto;
`;
export default DeleteChatButton;
