import styled from "styled-components";
import PlusButton from "./PlusButton";
import useChatList from "../../hook/useChatList";
import Trashcan from "../images/Trashcan.svg";
import { useRecoilState, useResetRecoilState } from "recoil";
import { chatListAtom } from "../../store/chatListAtom";
import { userChatAtom } from "../../store/userChatAtom";

function AichatHistoryList() {
  const { chatList, startNewChat } = useChatList();
  const [deleteList, setDeleteList] = useRecoilState(chatListAtom);
  const deleteChat = (id) => {
    // 해당 id를 제외한 리스트로 업데이트
    setDeleteList((prev) => prev.filter((chat) => chat.id !== id));
  };
  const resetChat = useResetRecoilState(userChatAtom);
  //대화창의 배열을 초기화하고 리스트들은 그대로 두고싶다
  //그러면 ai와 사용자가 대화한 대화창의 내용들을 저장하는 아톰을 참조해야한다
  const handleNewChat = () => {
    resetChat();
  };

  return (
    <AichatHistoryListWrapper>
      <div>채팅목록</div>

      {chatList.map((chat) => (
        <ButtonWrapper>
          <ChatListButton key={chat.id}> {chat.title} </ChatListButton>
          <TrashButton onClick={() => deleteChat(chat.id)}>
            <img src={Trashcan} alt="" width={20} />
          </TrashButton>
        </ButtonWrapper>
      ))}

      <PlusButton onClick={handleNewChat} />
    </AichatHistoryListWrapper>
  );
}

export default AichatHistoryList;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrashButton = styled.button`
  background: none;
  padding-top: 4px;
`;

const ChatListButton = styled.button`
  background: none;
  font-size: 18px;
  font-weight: bold;
`;

const AichatHistoryListWrapper = styled.div`
  background: #fafaf3;
  width: 30rem;
  height: 850px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;
