import React from "react";
import pageNotFound from "../assets/all-images/PageNotFound.jpg";
import "../styles/custom.css";

const NotFound = () => {
  return (
    <>
      <img src={pageNotFound} alt="not-found" className="page" />
    </>
  );
};

export default NotFound;
