import config from "../configs";

/**
 * Get question list for matching user keyword Id
 * @param {Number} keywordId
 * @returns questions

export async function postQuestions(keywordId) {
  var url = new URL(`${config.url}/api/questions`);
  url.search = new URLSearchParams({ keywordId: keywordId });

  return await (
    await fetch(url.toString(), {
      method: "GET",
      credentials: "include",
    })
  ).json();
}
 */

export function postQuestions(keywordId) {
  return [
    {
      id: 587,
      content: "리액트와 뷰의 차이가 무엇인가요?",
      answer: "이름의 차이입니다 ㅋㅋ",
      actions: {
        liked: true,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 589,
      content:
        "useState가 있는데 왜 보통 Redux, Recoil 등의 프레임워크를 사용하나요?",
      answer: "ㅁㅁㄴㄴ",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 589,
      content:
        "useState가 있는데 왜 보통 Redux, Recoil 등의 프레임워크를 사용하나요?",
      answer:
        "asdf 왜냐면 redux를 통하면 전역적인 상태 관리 하는게 더 쉬워지거든요~aaaaaaaaaㅁㄴㅇㄹ",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 590,
      content: "useState는 동기인가요, 비동기인가요? 그 이유는 무엇인가요?",
      answer: "aaa",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 590,
      content: "useState는 동기인가요, 비동기인가요? 그 이유는 무엇인가요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 591,
      content:
        "state를 직접 변경하지 않고 setState를 사용하는 이유는 무엇인가요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 592,
      content: "Redux를 사용해보셨나요? 무엇으로 구성되어 있나요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 594,
      content: "React 컴포넌트의 종류에는 무엇이 있고 무슨 차이가 있나요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 595,
      content: "JSX는 무엇인가요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 597,
      content: "state와 props의 차이는 무엇인가요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 598,
      content: "prop으로 전달되는 값의 type을 강제할 수 있나요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 601,
      content:
        "React를 스타일링 하는 방식엔 무엇이 있나요? 어떤 것을 사용해보셨나요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 607,
      content: "flux 패턴이란 무엇인가요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
    {
      id: 619,
      content: "리액트는 왜 class가 아니라 className을 사용하나요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: false,
        interviewListed: false,
      },
    },
  ];
}

/**
 * Like or Unlike a question
 * @param {Number} questionId
 * @returns response from server

export async function postQuestionLike(questionId) {
  return await fetch(`${config.url}/api/questions/like`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
    }),
  });
}
 */

export function postQuestionLike(questionId) {
  return Promise.ok;
}

/**
 * Dislike or Undislike a question
 * @param {Number} questionId
 * @returns response from server

export async function postQuestionDislike(questionId) {
  return await fetch(`${config.url}/api/questions/dislike`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
    }),
  });
}
 */

export function postQuestionDislike(questionId) {
  return Promise.ok;
}

/**
 * Post user answer of question
 * @param {Number} userQuestionId
 * @param {Number} userKeywordId
 * @param {String} answer
 * @returns response from server

export async function postQuestionAnswer(questionId, answer) {
  const tailQuestion = await fetch(`${config.url}/api/questions/answer`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
      answer: answer,
    }),
  });

  if (tailQuestion.status === 200) return tailQuestion.json();
  else return false;
}
 */

export function postQuestionAnswer(questionId, answer) {
  return {
    id: 934,
    content: "꼬리질문 입니다~",
    keywordId: 1496,
    actions: {
      liked: false,
      disliked: false,
      scrapped: false,
      interviewListed: false,
    },
  };
}

/* 
export async function postQuestionScrap(questionId) {
  return await fetch(`${config.url}/api/questions/scrap`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
    }),
  });
}
*/

export function postQuestionScrap(questionId) {
  return Promise.ok;
}

/*
export async function getScrappedQuestion() {
  const scrapped = await fetch(`${config.url}/api/questions/scrapped`, {
    method: "GET",
    credentials: "include",
  });

  if (scrapped.status) return await scrapped.json();
  else return scrapped.status;
}
*/

export function getScrappedQuestion() {
  return [
    {
      id: 605,
      content: "element와 컴포넌트의 차이점은 무엇인가요?",
      answer: "componenta 리스트",
      actions: {
        liked: false,
        disliked: true,
        scrapped: true,
        interviewListed: false,
      },
    },
    {
      id: 666,
      content: "virtual DOM이 무엇인가요?",
      answer: "",
      actions: {
        liked: false,
        disliked: false,
        scrapped: true,
        interviewListed: false,
      },
    },
    {
      id: 675,
      content: "AJAX란 무엇인가요?",
      answer: "인성문제있어",
      actions: {
        liked: false,
        disliked: true,
        scrapped: true,
        interviewListed: false,
      },
    },
    {
      id: 879,
      content: "비동기식 처리와 동기식 처리의 차이는 무엇인가요?",
      answer: "ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ",
      actions: {
        liked: false,
        disliked: true,
        scrapped: true,
        interviewListed: false,
      },
    },
    {
      id: 881,
      content: "블락킹/논블락킹과 동기/비동기의 차이가 무엇인가요?",
      answer: "ㅁㄴㅇㄹㅁㄴㅇㄹ",
      actions: {
        liked: false,
        disliked: false,
        scrapped: true,
        interviewListed: false,
      },
    },
  ];
}

/*
export async function postInterviewListed(questionId) {
  return await fetch(`${config.url}/api/questions/interviewListed`, {
    method: "POST",
    credentials: "include",
    body: new URLSearchParams({
      questionId: questionId,
    }),
  });
}
*/

export async function postInterviewListed(questionId) {
  return {
    status: 200
  };
}
