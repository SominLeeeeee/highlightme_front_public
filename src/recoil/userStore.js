import { atom } from "recoil";

export const atomCoverLetterElements = atom({
  key: "atomCoverLetterElements",
  default: {
    element: [{ problem: null, answer: null }],
    selectedElement: 0,
  },
});

export const atomUserInfo = atom({
  key: "atomUserInfo",
  default: {
    id: localStorage.getItem("user_id"),
    email: localStorage.getItem("email"),
    accessToken: localStorage.getItem("token"),
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
