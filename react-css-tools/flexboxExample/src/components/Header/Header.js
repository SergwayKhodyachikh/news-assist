import React from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserNav from "./UserNav/UserNav";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <Logo />
    <Search />
    <UserNav />
  </header>
);

export default Header;
