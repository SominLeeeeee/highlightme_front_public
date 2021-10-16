import React, { useEffect } from "react";
import "./coverletter.scss";
import ClInput from "../components/CoverLetter/ClInput";
import ClList from "../components/CoverLetter/ClList";
import Header from "../common/Header";
import { useRecoilState } from "recoil";
import { atomMenu } from "../recoil/userStore";

function Coverletter() {
  const [menu, setMenu] = useRecoilState(atomMenu);

  useEffect(() => {
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

export default Coverletter;
