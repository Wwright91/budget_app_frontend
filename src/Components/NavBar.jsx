import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/transactions">NavBar</Link>
      <button>
        <Link to="/transactions/new">New</Link>
      </button>
    </div>
  );
};

export default NavBar;
