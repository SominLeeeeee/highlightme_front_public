import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserValid } from "../utils";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atomUserInfo } from "../recoil/userStore";

/**
 * A router that prevents authenticated users from accessing public pages
 * restricted가 true이면 인증된 사용자도 해당 Component로 넘김
 * restricted가 false이면 인증된 사용자도 리다이렉트 시킴
 * @author Aaron Han <1@1c1.dev>
 * @param {React.Component} component
 * @param {Boolean} restricted(true: restricted route, false: public route)
 * @returns {React.Component}
 */
function PublicRouter({ component: Component, restricted, ...rest }) {
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserValid(userInfo) && restricted ? (
          <Redirect to="/find" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRouter;
