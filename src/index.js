import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import Footer from "./common/Footer";
import "./index.css";

ReactDOM.render(
  <RecoilRoot>
    <div className="wrapper">
      <App />
      <Footer />
    </div>
  </RecoilRoot>,
  document.getElementById("root")
);
