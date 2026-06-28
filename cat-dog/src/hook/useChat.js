import { useRecoilState } from "recoil";
import { userChatAtom } from "../store/userChatAtom";
import OpenAI from "openai";
import useChatList from "./useChatList";

//ai채팅창을 만들다보니 사용자가 입력할 때, ai가 입력할 때마다 채팅창에 대화를 띄워야했다
//그래서 처음엔 useState를 사용해서 각각마다 상태를 지정해주었고
//aichatbox에서 누가 무엇을 보냈는를 알기 위해서 객체를 반환하도록 만들었었다
//그런데 문제는 props로 넘겨주려다보니 그 깊이가 너무 깊었다
//그래서 함수를 넘겨주려다보니 코드가 불필요하게 많아지게 되었다
//그래서 생각한게 커스텀훅을 사용하거나 아톰을 사용해서
//일일이 props로 넘겨주는것이 아닌 다이렉트로 넘겨줄 수 있도록 하는 방법을 생각했다
//그래서 실무에서 조금 더 많이 쓸 법한 커스텀훅을 사용해서 넘겨주는 방법으로 해보자
//현재 실시간으로 대화가 올라가지 않았다
//그 이유는 커스텀 훅이 ChatHistoryBox 안에 있는 것과 Input안에 있는 것과 다르다고 생각하기 때문이다 그래서 다른 커스텀 훅이라고 생각하고 생각한대로 구현되지 않았다
//그래서 결국 아톰으로 가자
//현재 커스텀훅은 각각 따로놀고있다 그래서 아톰을 사용해서 각각 주려고 했으나
//아톰은 결국 하나의 데이터로 묶어버리잖아??!!
//그럼 커스텁훅에서 하나로 묶어버리면 커스텀 훅에만 적용하면 된다
//즉 useState에서는 각각의 저장소로 동작했지만 useRecoilState는 하나의 저장소 즉 아톰에 모이기 때문에 작동한다

//https://jjjj0601.tistory.com/112?category=1162321 채팅창 구현하기 참고자료
//https://cocoder16.tistory.com/62 채팅창 구현하기 참고자료
//https://www.google.com/search?q=%EB%A6%AC%EC%95%A1%ED%8A%B8+opai+%EC%82%AC%EC%9A%A9&oq=%EB%A6%AC%EC%95%A1%ED%8A%B8+opai+%EC%82%AC%EC%9A%A9&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgIGA0YHjIHCAIQABjvBTIHCAMQABjvBTIKCAQQABiABBiiBNIBCjExODkxajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8 openai 넣는 방법
//https://velog.io/@songing01/React-OpenAI-GPT-API%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-AI%EC%B1%97%EB%B4%87-%EA%B5%AC%ED%98%84 gpt api를 활용
const useChat = () => {
  // const [loading, setLoading] = useState(false);

  const client = new OpenAI({
    apiKey: "apiKey",

    dangerouslyAllowBrowser: true,
  });
  //현재 ai에게 대화를 걸었을 때 너무 오래기다려야했다 보통 ai랑 대화를 하다보면 좀 기다려야하면 '생각중'이라는 문구가 띄워진다
  //그걸 구현하려고하는데 찾아보니 spinner라고한다 비동기 함수에 useState를 넣어서 bool값으로 처리를 해주고
  //대화를 띄우는 컴포넌트에서 이걸 받아서 텍스트와 함께 로딩 화면을 구현하도록 해야하는거 같다 맞나??
  //https://www.davidhu.io/react-spinners/ 여기서 많이 가져오는듯
  //그러면 순서가 상단에 useState를 만들어주고 그 다음 주소를 불러온 후에 ai가 생각을 할 때! 스피너가 돌아야하니깐
  //ai가 답장을 하는 곳 전에 붙어줘야 한다
  const { addChatSession } = useChatList();
  const [chatList, setChatList] = useRecoilState(userChatAtom);

  const addUserChat = (what) => {
    if (chatList.length === 0) {
      addChatSession(what);
    }
    setChatList((prev) => [...prev, { who: "나", what, when: Date.now() }]);

    //아까 배열로 대화내역을 나열을 해서 정리했더니 uesr가 대화를 한 내용이 사라지면서 ai의 대화로 덮어씌워졌다
    //그래서 찾아보니 chatList 가 addUserChat() 함수가 시작될 때의 화면의 값을 계속 기억하고있기 때문이다
    //즉 아무것도 없는 상태를 기억하고 있는데 user가 입력을 해서 대화창에 나타나다가
    //밑에 로직에는 ai가 답하는 과정인데 로직을 돌다가 ai가 대답을 해야할 때 set이 움직이는데 그때 user가 대화를 하기 전에 상태를 기억하고 있기 때문에 user를 없애버리고 처음상태에서 자신만 출력을 하기 때문이다.....
    //이건 너무 어렵다....
    //setState를 함수로 하는 이유는 그 실행 될 때의 값을 바로 가져올 수 있기 때문이다

    // # 내 역할이 뭔지 설정해주기
    // # 사용자가 입력을 넣기전에, 미리 메시지를 만들어서 입력시켜놓기

    // setLoading(true);

    const message = [
      {
        role: "system",
        content: "너는 내가 물어보는 반려동물 지식에 대해서 설명해라",
      },
    ];
    message.push({
      role: "user",
      content: what,
    });

    client.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: message,
      })
      .then((completion) => {
        addAiChat(completion.choices[0].message.content);
      });
    // .catch((error) => {
    //   console.error("응답에 실패했습니다", error);
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
  };
  const addAiChat = (what) => {
    setChatList((prev) => [...prev, { who: "마이봇", what, when: Date.now() }]);
  };

  return { chatList, addUserChat, addAiChat };
};

export default useChat;
