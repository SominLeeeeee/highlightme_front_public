import config from "./configs";

/* 리덕스에서 관리할 상태 정의 */
const initialState = {
  id: 2,
  keywords: ["this", "is", "initial", "keywords"],
  selectedKeyword: "selectedKeywordTemp",
  email: "a@b.c",
  signUpLevel: 0,
  coverLetter: [{ problem: "자기소개서 문항 입력", answer: "" }],
  selectedCoverLetterElement: 1,
};

/* 액션 타입 정의 */
export const SELECT_KEYWORD = "SELECT_KEYWORD";
export const VIEW_KEYWORDS = "VIEW_KEYWORDS";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_REGISTER = "SIGN_UP_REGISTER";

export const EDIT_COVERLETTER = "EDIT_COVERLETTER";

/* 액션 생성 함수 정의 */
const selectKeyword = (keyword) => ({
  type: SELECT_KEYWORD,
  keyword,
});

const viewKeywords = () => ({
  type: VIEW_KEYWORDS,
});

const signUp = (email) => ({
  type: SIGN_UP,
  email,
});

const signUpRegister = (level) => ({
  type: SIGN_UP_REGISTER,
  level,
});

/**
 *
 * @param {{number,problem,answer}} payload
 * @returns
 */
export const editCoverLetter = (payload) => ({
  type: EDIT_COVERLETTER,
  number: payload.number,
  problem: payload.problem,
  answer: payload.answer,
});

/* 리듀서 만들기 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_KEYWORD:
      return {
        ...state,
        selectedKeyword: action.keyword,
      };
    case VIEW_KEYWORDS:
      var keywordArr = [];
      fetch(`${config.URL}/api/keywords?user_id=${state.id}`, {
        // fetch(`/api/keywords?user_id=${state.id}`, {
        method: "GET",
        credentials: "include",
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          keywordArr = res;
          console.log(keywordArr);
        });
      return {
        ...state,
        keywords: keywordArr,
      };
    case SIGN_UP:
      console.log(action.email);
      return {
        ...state,
        email: action.email,
      };
    case SIGN_UP_REGISTER:
      console.log("go to complete");
      return {
        ...state,
        signUpLevel: action.level,
      };
    case EDIT_COVERLETTER:
      if (state.coverLetter.length == action.number) {
        state.coverLetter = [
          ...state.coverLetter,
          {
            problem: action.problem,
            answer: action.answer,
          },
        ];
      } else {
        state.coverLetter[action.number] = {
          problem: action.problem,
          answer: action.answer,
        };
      }

      console.log(state.coverLetter);

      return {
        ...state,
        editCoverLetter: action.number,
      };
    default:
      return state;
  }
}

/* 스토어 생성하기 */
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

/* 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수 */
// const listener = () => {
//   const state = store.getState();
//   console.log(state);
// };

// const unsubscribe = store.subscribe(listener);
