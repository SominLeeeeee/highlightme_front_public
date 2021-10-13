import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const atomCoverLetterElements = atom({
  key: "atomCoverLetterElements",
  default: {
    element: [{ problem: null, answer: null }],
    selectedElement: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const atomUserInfo = atom({
  key: "atomUserInfo",
  default: {
    id: undefined,
    email: undefined,
    accessToken: undefined,
  },
  effects_UNSTABLE: [persistAtom],
});

export const atomKeyword = atom({
  key: "atomKeyword",
  default: {
    userKeywords: [],
    selectedKeyword: "",
    selectedKeywordId: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const atomSignUp = atom({
  key: "atomSignUp",
  default: {
    signUpLevel: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
