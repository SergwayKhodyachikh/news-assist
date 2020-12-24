import React from "react";
import Legal from "./Legal/Legal";
import SideNav from "./SideNav/SideNav";
import "./Sidebar.scss";

const Sidebar = () => (
  <nav className="sidebar">
    <SideNav />
    <Legal />
  </nav>
);

export default Sidebar;
