import { atom } from "recoil";

export const atomCoverLetterElements = atom({
  key: "atomCoverLetterElements",
  default: {
    element: [{ problem: "자기소개서 문항을 입력해주세요", answer: "" }],
    selectedElement: "0",
  },
});

export const atomUserInfo = atom({
  key: "atomUserInfo",
  default: {
    email: "",
  },
});

export const atomKeyword = atom({
  key: "atomKeyword",
  default: {
    userKeywords: [],
    selectedKeyword: "",
  },
});
