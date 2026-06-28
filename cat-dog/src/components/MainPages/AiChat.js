import styled from "styled-components";
import ChatHistoryBox from "../AiChatPageComponent/ChatHistoryBox";
import AichatHistoryList from "../AiChatPageComponent/AichatHistoryList";

function AiChat() {
  return (
    <AIChatListWrapper>
      <AichatHistoryList />
      <ChatHistoryBox />
    </AIChatListWrapper>
  );
}

const AIChatListWrapper = styled.div`
  display: flex;
`;

export default AiChat;
