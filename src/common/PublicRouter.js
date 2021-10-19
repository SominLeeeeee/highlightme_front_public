import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserValid } from "../utils";

/**
 * A router that prevents authenticated users from accessing public pages
 * restricted가 true이면 인증된 사용자도 해당 Component로 넘김
 * restricted가 false이면 인증된 사용자도 리다이렉트 시킴
 * @author Aaron Han <1@1c1.dev>
 * @param {React.Component} component
 * @param {Boolean} restricted(true: restricted route, false: public route)
 * @returns {React.Component}
 */
const PublicRouter = ({ component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserValid() && restricted ? (
          <Redirect to="/find" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRouter;
