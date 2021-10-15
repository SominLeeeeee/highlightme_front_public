import React, { useEffect } from "react";
import config from "../configs";

function Test() {
  useEffect(() => {
    fetch(`${config.URL}/api/tests`, {
      method: "GET",
      credentials: "include",
    });
  }, []);

  return <div>wtf</div>;
}

export default Test;
