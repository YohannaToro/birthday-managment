import React from "react";
import MicrosoftLogin from "react-microsoft-login";

export default props => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <MicrosoftLogin clientId={"0060acb2-9da3-4914-b1d8-7b92de7adc63"} authCallback={authHandler} />
    

  );
};