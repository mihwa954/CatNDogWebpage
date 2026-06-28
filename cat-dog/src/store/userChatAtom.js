import { atom } from "recoil";

//사용자와 ai가 대화한 내역을 담은 아톰
export const userChatAtom = atom({
  key: "userChatAtom",
  default: [],
});
