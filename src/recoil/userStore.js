import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const atomCoverLetterElements = atom({
  key: "atomCoverLetterElements",
  default: {
    elements: [{ problem: "", answer: "", public: 1 }],
    company: "",
    title: "",
    tags: "",
    comments: "",
    selectedElement: 0,
  },
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
    selected: "",
    modified: 0,
  },
});

export const atomQuestion = atom({
  key: "atomQuestion",
  default: new Map(),
});

export const atomSignUp = atom({
  key: "atomSignUp",
  default: {
    signUpLevel: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const atomMenu = atom({
  key: "atomMenu",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
