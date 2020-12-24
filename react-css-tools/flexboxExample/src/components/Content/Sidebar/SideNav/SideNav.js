import React from "react";
import "./SideNav.scss";
import SideNavItem from "./SideNavItem/SideNavItem";

const SIDE_NAV_ITEMS = [
  { icon: "icon-home", text: "Hotel" },
  { icon: "icon-aircraft-take-off", text: "Flight" },
  { icon: "icon-key", text: "Car rental" },
  { icon: "icon-map", text: "Tours" }
];

const SideNav = () => (
  <ul className="side-nav">{SIDE_NAV_ITEMS.map(SideNavItem)}</ul>
);

export default SideNav;
