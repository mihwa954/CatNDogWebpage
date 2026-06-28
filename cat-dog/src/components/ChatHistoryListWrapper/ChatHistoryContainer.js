import styled from "styled-components";
import ChatHistoryList from "./ChatHistoryList";
import ChatHistoryTitle from "./ChatHistoryTitle";

function ChatHistoryContainer() {
  return (
    <ChatHistoryContainerWrapper>
      <ChatHistoryTitle />
      <ChatHistoryList />
    </ChatHistoryContainerWrapper>
  );
}

const ChatHistoryContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 30px;

  background: #daeafb;
  padding: 25px;
  border-left: 4px solid 00649B;
`;
export default ChatHistoryContainer;
