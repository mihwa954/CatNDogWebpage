import { useRecoilState } from "recoil";
import { chatListAtom } from "../store/chatListAtom";

const useChatList = () => {
  const [chatList, setChatList] = useRecoilState(chatListAtom);
  //사용자가 첫번째로 대화한 내용을 제목을 쓰고싶다
  //그러면 우선은 user와 ai가 대화한 내역들을 아톰에서 관리를 하자

  //addChatSession는 첫번째 메시지의 id값은 지금 사용자가 입력한 시간을 id값으로 하고
  //substring 이라는 것은 자바스크립트에서 문자열을 자르는 방법이다
  //substr("시작 위치", "길이") 또는 substr("시작 위치") 이런식으로 사용한다
  //https://gent.tistory.com/414 substring 사용방법 참고자료
  //0,15는 문자열의 맨 첫 글자부터 15글자 직전까지 즉 14번째까지 가져오겠다는 뜻이다
  const addChatSession = (firstMessage) => {
    const newSession = {
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      //Dete.prototype.toLocaleTimestring은 인수로 전달한 로컬을 기준으로 Date 객체의 시간을 표현한 문자열을 반환한다
      //인수를 생략한 경우 브라우저가 동작 중인 시스템의 로컬을 적용한다
      //앞에 new Date()를 붙이는 것은 현재의 date를 컴퓨터가 보기에 쉽도록 가져온다
      //그리고 뒤에 toLocaleString()을 붙이는 것은 이제 사람이 보기에 편한 문자열 방식으로 가져오라는 것이다
      //모던 자바스크립트 딥 다이브 576p 참고
      title: firstMessage.substring(0, 15),
      message: [{ role: "마이봇", content: firstMessage }],
    };

    //setChatList 결국 새로운 대화메시지? 제목을 앞에두고 기존의 목록들을 배열로 관리해달라는 것이다
    setChatList((prev) => [newSession, ...prev]);
  };
  //버튼을 누르면 대화창이 비워질 수 있도록 되겄지???

  return { chatList, addChatSession };
};

export default useChatList;
