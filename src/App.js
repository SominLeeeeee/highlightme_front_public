import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const SignIn = lazy(() => import("./routes/SignIn"));
const SignUp = lazy(() => import("./routes/SignUp"));
const QuestionsList = lazy(() => import("./routes/QuestionsList"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}

          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/questions/:keyword" component={QuestionsList} />

          {/* <Route path="/signin/logout" component={Logout} />
          <Route path="/field" component={Field} />

          <Route path="/coverletter" component={Coverletter} />

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
