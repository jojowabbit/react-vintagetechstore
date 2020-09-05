import React from "react";

import preloader from "../assets/preloader.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h2>loading</h2>
      <img src={preloader} alt="loading gif" />
    </div>
  );
};

export default Loading;
