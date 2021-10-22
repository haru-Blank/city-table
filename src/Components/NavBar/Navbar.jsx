import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStepBackward } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">{<AiOutlineStepBackward className="nav--icon" />}</Link>
    </nav>
  );
};

export default Navbar;
