import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRouter from "./common/PublicRouter";
import PrivateRouter from "./common/PrivateRouter";

const LandingPage = lazy(() => import("./routes/LandingPage"));
const SignUpPage = lazy(() => import("./routes/SignUpPage"));
const SignOutPage = lazy(() => import("./routes/SignOutPage"));
const FindQuestionPage = lazy(() => import("./routes/FindQuestionPage"));
const MyPage = lazy(() => import("./routes/MyPage"));
const CoverLetterPage = lazy(() => import("./routes/CoverletterPage"));
const NotFoundPage = lazy(() => import("./routes/NotFoundPage"));
const TestPage = lazy(() => import("./routes/TestPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          {/* Public Routers */}
          <PublicRouter
            path="/"
            exact
            restricted={true}
            component={LandingPage}
          />
          <PublicRouter
            path="/signout"
            exact
            restricted={false}
            component={SignOutPage}
          />
          <PublicRouter
            path="/signup"
            exact
            restricted={false}
            component={SignUpPage}
          />

          {/* Private Routers */}
          <PrivateRouter path="/find" exact component={FindQuestionPage} />
          <PrivateRouter path="/mypage" exact component={MyPage} />
          <PrivateRouter
            path="/coverletter"
            exact
            component={CoverLetterPage}
          />

          {/* ETC Routers */}
          <Route component={NotFoundPage} />
          {/* <Route exact path="/test" component={TestPage} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
