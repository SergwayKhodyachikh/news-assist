import React from 'react';
import { Link } from 'react-router-dom';

const PageLink = ({address , content, cssClass }) => {
  return (
    <Link  to={address} className={cssClass} >
      {content}
    </Link>
  );
};

export default PageLink;
