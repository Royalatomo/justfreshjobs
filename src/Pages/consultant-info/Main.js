import React from "react";
import Middle from "./Middle";
import Pricing from "./Pricing";
import Companies from "./Companies";

function Main() {
  return (
    <>
      <div className="consultant-container">
        <Middle />
        <Pricing />
        <Companies />
      </div>
    </>
  );
}

export default Main;
