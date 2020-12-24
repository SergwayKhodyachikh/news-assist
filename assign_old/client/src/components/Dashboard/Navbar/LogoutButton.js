import React from 'react';
import { FiLogOut } from 'react-icons/fi';

export const LogoutButton = ({lineStyle, linkStyle}) => {
  return (
    <li className={lineStyle}>
      <a
        href="/api/auth/logout"
        className={linkStyle}
      >
        <FiLogOut className="mr-4 ml-1" />
        <span> Log Out</span>
      </a>
    </li>
  );
};
