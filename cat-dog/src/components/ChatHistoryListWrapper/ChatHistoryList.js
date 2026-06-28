import styled from "styled-components";

import { useRecoilValue, useResetRecoilState } from "recoil";
import { userAtom } from "../../store/userAtom";
import useChatList from "../../hook/useChatList";
import { chatListAtom } from "../../store/chatListAtom";

function ChatHistoryList() {
  const userChatList = useRecoilValue(userAtom);
  const deleteList = useResetRecoilState(chatListAtom);
  const { chatList } = useChatList();

  const isDelete = () => {
    deleteList();
  };

  return (
    <>
      {userChatList?.id ? (
        <>
          <ChatHistoryListWrapper>
            {chatList.map((chat) => (
              <ListBox key={chat.id}>
                <HeadWrapper>{chat.title}</HeadWrapper>

                <DateWrapper>{chat.createdAt} </DateWrapper>
              </ListBox>
            ))}

            {chatList.length === 0 && (
              <NeedLogin>
                <ChatLogsWrapper>항목이 없습니다.</ChatLogsWrapper>
              </NeedLogin>
            )}
          </ChatHistoryListWrapper>

          <ButtonWrapper onClick={isDelete}>전체 이력 삭제</ButtonWrapper>
        </>
      ) : (
        <ChatHistoryListWrapper>
          <NeedLogin>
            <ChatLogsWrapper>가입이 필요합니다</ChatLogsWrapper>
          </NeedLogin>
        </ChatHistoryListWrapper>
      )}
    </>
  );
}

const NeedLogin = styled.div`
  background: #ffffff;
  padding: 6px 25px;
  width: 450px;
  height: 15rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  text-align: center;
`;

const ButtonWrapper = styled.button`
  background: none;
  cursor: pointer;
  margin-right: auto;
`;

const ChatHistoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 240px;
  overflow-y: auto;
`;

const ListBox = styled.div`
  background: #ffffff;
  padding: 6px 25px;
  width: 450px;
  height: 110px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

const HeadWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
const ChatLogsWrapper = styled.div`
  font-size: 0.8rem;
  color: #5d6058;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DateWrapper = styled.div`
  font-size: 1rem;
  color: #797c73;
`;

export default ChatHistoryList;
