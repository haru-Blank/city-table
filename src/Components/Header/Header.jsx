import React from 'react';

const Header = ({ type, children }) => {
  if (type === 'primary') {
    return <h1 className="heading--primary">{children}</h1>;
  } else if (type === 'secondary') {
    return <h2 className="heading--secondary">{children}</h2>;
  }
};

export default Header;
