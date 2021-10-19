import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./coverletterPage.scss";
import ClInput from "../components/CoverLetter/ClInput";
import ClList from "../components/CoverLetter/ClList";
import Header from "../common/Header";
import { useRecoilState } from "recoil";
import { atomMenu, atomUserInfo } from "../recoil/userStore";
import { isUserValid } from "../utils";

function CoverletterPage() {
  const [menu, setMenu] = useRecoilState(atomMenu);

  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(atomUserInfo);

  useEffect(() => {
    if (!isUserValid(userInfo)) {
      history.push("/signup");
    }

    setMenu("자기소개서");
  }, []);

  return (
    <div>
      <Header />
      <div className="coverletterWrapper">
        <div className="coverletter">
          <ClList />
          <ClInput />
        </div>
      </div>
    </div>
  );
}

export default CoverletterPage;
