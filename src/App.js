import React, { Suspense, lazy } from "react";
import "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const Test = lazy(() => import("./routes/Test"));
const SignOutPage = lazy(() => import("./routes/SignOutPage"));
const SignIn = lazy(() => import("./components/SignUp/GoogleLoginButton"));
const SignUpPage = lazy(() => import("./routes/SignUpPage"));
const GotoSignUp = lazy(() => import("./routes/GotoSignUp"));
const QuestionsList = lazy(() =>
  import("./components/FindQuestion/QuestionsList")
);
const KeywordGraphView = lazy(() =>
  import("./components/FindQuestion/KeywordGraphView")
);
const Coverletter = lazy(() => import("./routes/Coverletter"));
const FindQuestion = lazy(() => import("./routes/FindQuestion"));
const MyPage = lazy(() => import("./routes/MyPage"));
const Modal = lazy(() => import("./common/Modal"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Modal} />

          <Route path="/signout" component={SignOutPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup_info" component={SignUpPage} />
          <Route path="/signup" component={GotoSignUp} />

          <Route path="/mypage" component={MyPage} />

          <Route path="/questions/:keyword" component={QuestionsList} />
          <Route path="/find" component={FindQuestion} />
          {/* <Route path="/keywordview/graph" component={KeywordGraphView} /> */}

          <Route path="/coverletter" component={Coverletter} />

          {/* <Route path="/signin/logout" component={Logout} />
          <Route path="/field" component={Field} />


          <Route
            path="/questions/keywordmap?view=graph"
            component={GraphKeyword}
          />

          <Route path="/questions/:keyword" component={Questions} />
          <Route path="/questions/keywordmap?view=cl" component={ClKeyword} />
          <Route path="/questions/search/:query" component={Search} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
