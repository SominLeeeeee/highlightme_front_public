import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./store";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>,
  document.getElementById("root")
);
