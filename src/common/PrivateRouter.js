import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserValid } from "../utils";

/**
 * A router that prevents unauthenticated users from accessing private pages
 * @author Aaron Han <1@1c1.dev>
 * @param {React.Component} component
 * @returns {React.Component}
 */
const PrivateRouter = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserValid() ? <Component {...props} /> : <Redirect to="/signup" />
      }
    />
  );
};

export default PrivateRouter;
