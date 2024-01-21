import React from "react";
import { Link } from "react-router-dom";
const RNavbar = () => {
  return (
    <nav className="flex justify-between ">
      <Link to="/">Zomato</Link>
      <ul className="flex justify-between gap-5">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};
export default RNavbar;
