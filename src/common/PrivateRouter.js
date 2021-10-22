import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserValid } from "../utils";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atomUserInfo } from "../recoil/userStore";

/**
 * A router that prevents unauthenticated users from accessing private pages
 * @author Aaron Han <1@1c1.dev>
 * @param {React.Component} component
 * @returns {React.Component}
 */
function PrivateRouter({ component: Component, ...rest }) {
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserValid(userInfo) ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRouter;
