import styled from "styled-components";
import useUserInput from "../../hook/useUserInput";
import Frame from "../images/Frame.png";

function ChatInputBox() {
  const { userInputMesssage, setUserInputMessage, send } = useUserInput();

  //enter는 input에서 감지를 해야한다
  //왜냐하면 사용자가 글자를 input에 치기 때문에
  //즉 검색창에 글자를 치고 엔터를 치듯이 사용자의 입력을 받는곳에 엔터이벤트를 넣어야한다
  const handleKeyDown = (e) => {
    // 1. Enter만 눌렀을 때 전송 (Shift + Enter 시 줄바꿈)
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // 엔터 입력 시 줄바꿈 방지
      send();
    }
  };
  return (
    <ChatInputWrapper>
      <InputWrapper
        type="text"
        placeholder="궁금한 사항을 물어보세요"
        onKeyDown={handleKeyDown}
        value={userInputMesssage}
        onChange={(e) => setUserInputMessage(e.target.value)}
      ></InputWrapper>

      <ButtonWrapper onClick={() => send()}>
        <img src={Frame} alt="" />
      </ButtonWrapper>
    </ChatInputWrapper>
  );
}

const ChatInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100rem;
  height: 5rem;
  background-color: #fafaf3;
  display: flex;
  padding: 20px 10px;
  gap: 5px;
  @media screen and (min-width: 1024px) {
    width: 980px;
  }
`;

const ButtonWrapper = styled.button`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`;

const InputWrapper = styled.input`
  border: 1px solid #9b9b9b;
  width: 100%;
  height: 50px;
  background: none;
  outline: none;
  font-size: 17px;
  padding: 10px;
`;

export default ChatInputBox;
