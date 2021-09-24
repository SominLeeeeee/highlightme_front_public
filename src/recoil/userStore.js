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
    id: "0",
    email: "",
    accessToken: "",
  },
});

export const atomKeyword = atom({
  key: "atomKeyword",
  default: {
    userKeywords: [],
    selectedKeyword: "",
  },
});

export const atomSignUp = atom({
  key: "atomSignUp",
  default: {
    signUpLevel: 0,
  },
});
