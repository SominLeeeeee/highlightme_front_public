import "./footer.scss";
import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div id="infoFooter">
        <img id="smallLogo" src="/images/ic-sign-logo.svg" />
        <div className="infoDiv">
          <p className="infoTitle">Contact Us</p>
          <p className="infoText">service@hlight.me</p>
          <p className="infoText">Mon - Fri 10AM - 6PM</p>
          <p className="copyright">Copyright & Design by @teamrare</p>
        </div>
        <div className="infoDiv">
          <p className="infoTitle">Policy</p>
          <a className="infoText">이용약관</a>
          <a className="infoText">개인정보 처리방침</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
