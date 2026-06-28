import { atom } from "recoil";

const realLocalStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

//ai와 user가 대화한 내역들을 배열로 관리하고
//아톰에 대화 내역이 들어오게 되면 리코일을 사용해서 사용자의 대화 내역들 중에 제목이 되는 부분들을 꺼내서 사용하자
export const chatListAtom = atom({
  key: "chatListAtom",
  default: [],
  effects: [realLocalStorageEffect("chatList")],
});
