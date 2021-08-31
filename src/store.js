import { createStore } from "redux";
import config from "./configs/index";

console.log("hello");

/* 리덕스에서 관리할 상태 정의 */
const initialState = {
  id: 2,
  keywords: [],
  clickedKeyword: "",
};

/* 액션 타입 정의 */
const CLICK_KEYWORD = "CLICK_KEYWORD";
const VIEW_KEYWORDS = "VIEW_KEYWORDS";

/* 액션 생성 함수 정의 */
const clickKeyword = (keyword) => ({
  type: CLICK_KEYWORD,
  keyword,
});

const viewKeywords = () => ({
  type: VIEW_KEYWORDS,
});

/* 리듀서 만들기 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_KEYWORD:
      return {
        ...state,
        clickedKeyword: action.keyword,
      };
    case VIEW_KEYWORDS:
      var keywordArr = [];
      fetch(`${config.URL}/api/keywords?user_id=2`, {
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
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

/* 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수 */
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

/* 액션들을 디스패치 해보기 */
store.dispatch(clickKeyword("aaa"));
store.dispatch(clickKeyword("bbb"));
store.dispatch(clickKeyword("ccc"));
store.dispatch(clickKeyword("ddd"));
store.dispatch(clickKeyword("eee"));
store.dispatch(clickKeyword("fff"));
store.dispatch(clickKeyword("ggg"));
store.dispatch(viewKeywords());
