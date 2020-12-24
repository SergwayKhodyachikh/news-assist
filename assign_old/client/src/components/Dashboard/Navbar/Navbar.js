import React from 'react';
import { GoHome } from 'react-icons/go';
import { AiOutlineUser, AiOutlineTeam, AiOutlineBell, AiOutlineSetting, AiOutlineFolder, AiOutlineLogout } from 'react-icons/ai';

import NavItem from './NavItem';
import NavbarLogo from './NavbarLogo';
import { LogoutButton } from './LogoutButton';

const NAVBAR_LIST = [
  { name: 'Home', link: '/dashboard', Icon: GoHome },
  { name: 'Projects', link: '/dashboard/projects', Icon: AiOutlineFolder },
  { name: 'Collaborate', link: '/dashboard/collaborate', Icon: AiOutlineTeam },
  { name: 'Profile', link: '/dashboard/profile', Icon: AiOutlineUser },
  { name: 'Notifications', link: '/dashboard/notifications', Icon: AiOutlineBell },
  { name: 'Settings', link: '/dashboard/settings', Icon: AiOutlineSetting }
];

const lineStyle = 'py-2 flex flex-1';
const linkStyle =
  'py-2 flex flex-1 items-center rounded-full px-4 py-2 hover:text-blue-500  hover:bg-blue-100 outline-none focus:shadow-outline focus:text-blue-500';

const renderNavbarList = () =>
  NAVBAR_LIST.map(NavItemProps => (
    <NavItem
      {...NavItemProps}
      key={NavItemProps.name}
      lineStyle={lineStyle}
      linkStyle={linkStyle}
    />
  ));

const Navbar = () => {
  return (
    <nav className="flex-1 flex flex-col">
      <NavbarLogo />
      <ul className="text-xl font-bold pt-5 ml-auto mr-10">
        {renderNavbarList()}
        <LogoutButton lineStyle={lineStyle} linkStyle={linkStyle} />
      </ul>
    </nav>
  );
};

export default Navbar;
