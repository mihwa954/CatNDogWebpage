import styled from "styled-components";
import useChat from "../../hook/useChat";
import ChatInputBox from "./ChatInputBox";
import { useEffect, useRef } from "react";

//이 창에서 필요한 것은
//1. 대화의 내용을 띄울 것
//2. 그 대화를 누가 했는지 알아야 함
//3. 순서가 있어야한다
//이것들을 쉽게 할 수 있는 것은 배열이다
//왜냐? 순서대로 출력을 해야하기 때문에
//ai가 답을 하는시간이 길어져서 스피너를 사용하려고 했는데 안된다
//콘솔을 찍어보니 false로 나왔다
//입력창의 아톰저장소와 대화창의 아톰저장소는 다르다...결국 로직은 같지만 서로다른 저장소를 가지고 있기 때문에
//커스텀 훅을 사용해서 로딩중을 띄우려고 했으나 다른 저장소를 바라보고 있기 때문에 말을듣지 않았다
//그러면 결국 아래 두개의 컴포넌트는 하나의 저장소를 바라보도록 해야하는데
//그러기엔 이미....너무 많은 강을 건넜다...그렇다고 로딩중 하나 띄우겠다고 아톰을 또 생성해버리면 너무 복잡해질거 같다
//일단 주석으로 두고 다음 프로젝트 때 써먹어야겠다
//다음 프로젝트에서는 좀 더 세밀하게 기획을 해서 만들어야겠다 ^^^^^^^^^^^^

function ChatHistoryBox() {
  const { chatList } = useChat();
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);
  // console.log("현재 로딩중", loading);

  return (
    <ChatHistoryBoxWrapper>
      <ChatListWrapper>
        {chatList.map((chat) => {
          if (chat.who === "나") {
            return (
              <UserChatWrapper>
                <UserWrapper>
                  <div>{chat.who} </div>
                </UserWrapper>

                <UserChatBox>{chat.what}</UserChatBox>
              </UserChatWrapper>
            );
          } else if (chat.who === "마이봇") {
            return (
              <AiChatWrapper>
                <div>{chat.who} </div>
                <AiChatBox>{chat.what} </AiChatBox>
              </AiChatWrapper>
            );
          }
        })}

        {/* {loading && (
          <div>
            <HashLoader
              color="#000000"
              loading={loading}
              size={50}
              speedMultiplier={1}
            />
            <span>마이봇이 생각중입니다 조금만 기다려주세요</span>
          </div>
        )} */}
        <div ref={scrollRef}></div>
      </ChatListWrapper>

      <ChatInputBox />
    </ChatHistoryBoxWrapper>
  );
}

const ChatListWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UserChatWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AiChatWrapper = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserChatBox = styled.div`
  border-radius: 10px;
  padding: 10px 25px;
  border: none;
  background: #dd9e59;
  color: #50321e;
  font-weight: bold;
`;

const AiChatBox = styled.div`
  border-radius: 10px;
  padding: 10px 25px;
  border: none;
  background: #f0d8a1;
  color: #000000;
  font-weight: bold;
`;

const ChatHistoryBoxWrapper = styled.div`
  width: 100rem;
  height: 53.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: #f0e3da;
`;

export default ChatHistoryBox;
