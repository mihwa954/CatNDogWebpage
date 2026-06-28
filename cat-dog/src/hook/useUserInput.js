import { useRecoilState } from "recoil";
import useChat from "./useChat";
import { userChatInputAtom } from "../store/userChatInputAtom";

const useUserInput = () => {
  const { addUserChat } = useChat();
  const [userInputMesssage, setUserInputMessage] =
    useRecoilState(userChatInputAtom);

  const send = () => {
    //지금 구현하려는 것은 입력창에 사용자가 입력한 내용이 있을때만 대화창에 띄우고싶다
    //즉 빈값은 허용하지 않음
    //그러면 사용자가 입력한 값이 들어오는 곳이 userInputMesssage 이고 사용자가 입력한 값을 더하는거? addUserChat 이라면
    //userInputMesssage값이 있을때만 더해라 라는 로직을 구현해야한다
    //trim은 새로 들어온 문자열의 공백을 없애버린다

    if (userInputMesssage.trim()) {
      addUserChat(userInputMesssage);
    }
    setUserInputMessage("");
  };
  //입력창에 엔터키를 누를 때, 버튼을 누를 때 입력창에 있는 내용이 채팅창에 띄워지고 입력창은 비워진다
  //버튼이랑 입력창이랑 하나의 이벤트가 될 수 있도록 함수를 만들어준다
  //이렇게 되면 동일한 이벤트가 적용이되고 나중에 로직을 고칠 때도 하나만 고치면 된다
  //커스텀 훅을 사용하는 목적은 같은 로직을 여러곳에 사용할 때 쓴다
  //같은 로직 뿐 아니라 동일한 데이터를 사용해야 하기 때문에 recoil을 사용하는 것이다

  return { userInputMesssage, setUserInputMessage, send };
};

export default useUserInput;
