import Robot from "../images/Robot.png";
import styled from "styled-components";

function ChatHistoryTitle(){
    return(
        <ChatHistoryWrapper>

        <IconWrapper>
          <img src={Robot} alt="" />
        </IconWrapper>
        
      <span>최근 질문내역</span>

      </ChatHistoryWrapper>
    )
}

const ChatHistoryWrapper = styled.div`
  margin-right: auto;
  display: flex;
  gap: 10px;
`;

const IconWrapper = styled.div`
padding-top: 4px;
`

export default ChatHistoryTitle