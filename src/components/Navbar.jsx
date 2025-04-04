import React from "react";
import vite from "../../public/vite.svg";
import { Link, replace } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={vite} alt="vite" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/product">
          <li>Product</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/about", { replace: true })}>
        Get started
      </button>
    </div>
  );
};

export default Navbar;
