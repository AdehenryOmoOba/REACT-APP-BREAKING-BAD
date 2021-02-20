import React from "react";
import spinner from "../../images/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="loading-image"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
