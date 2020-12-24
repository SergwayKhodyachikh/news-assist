import React from "react";

import "./Content.scss";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const Content = () => (
  <div className="content">
    <Sidebar />
    <Main />
  </div>
);

export default Content;
