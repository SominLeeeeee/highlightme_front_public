import React, { Suspense, lazy } from "react";
import "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const SignOut = lazy(() => import("./routes/SignOut"));
const SignIn = lazy(() => import("./components/SignUp/GoogleLoginButton"));
const SignUp = lazy(() => import("./routes/SignUp"));
const GotoSignUp = lazy(() => import("./routes/GotoSignUp"));
const QuestionsList = lazy(() =>
  import("./components/FindQuestion/QuestionsList")
);
const KeywordGraphView = lazy(() =>
  import("./components/FindQuestion/KeywordGraphView")
);
const Coverletter = lazy(() => import("./routes/Coverletter"));
const FindQuestion = lazy(() => import("./routes/FindQuestion"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/signout" component={SignOut} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup_info" component={SignUp} />
          <Route path="/signup" component={GotoSignUp} />
          <Route path="/questions/:keyword" component={QuestionsList} />
          <Route path="/quest" component={FindQuestion} />
          {/* <Route path="/keywordview/graph" component={KeywordGraphView} /> */}
          <Route path="/coverletter" component={Coverletter} />
          <Route path="/headerTest" component={Header} />

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
