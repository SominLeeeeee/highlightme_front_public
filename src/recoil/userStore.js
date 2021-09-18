import { atom } from "recoil";

export const atomCoverLetterElements = atom({
  key: "atomCoverLetterElements",
  default: [{ problem: "자기소개서 문항을 입력해주세요", answer: "" }],
});