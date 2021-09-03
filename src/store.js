import { createStore } from "redux";
import config from "./configs";

console.log("hello");

/* 리덕스에서 관리할 상태 정의 */
const initialState = {
  id: 2,
  keywords: ["this", "is", "initial", "keywords"],
  selectedKeyword: "selectedKeywordTemp",
};

/* 액션 타입 정의 */
const SELECT_KEYWORD = "SELECT_KEYWORD";
const VIEW_KEYWORDS = "VIEW_KEYWORDS";

/* 액션 생성 함수 정의 */
const selectKeyword = (keyword) => ({
  type: SELECT_KEYWORD,
  keyword,
});

const viewKeywords = () => ({
  type: VIEW_KEYWORDS,
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
        method: "GET",
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