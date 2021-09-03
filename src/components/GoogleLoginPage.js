import React from "react";
import { GoogleLogin } from "react-google-login";

function GoogleLoginPage() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <h1>google login test</h1>
      <GoogleLogin
        clientId="568158562597-qu7pvd53laqmvfsas5bihd5k1lk53c3s.apps.googleusercontent.com"
        buttonText="GoogleLogin"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default GoogleLoginPage;
