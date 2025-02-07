import React from "react";
import { NavLink } from "react-router-dom";

// function Nav() {
const Nav = () => {
  return (
    <header className="flex-row px-2">
      <div>
        <NavLink to="/developer-portfolio" activeClassName="selected">Ann-Marie Orozco </NavLink>
      </div>
      <nav>
        <h5 className="flex-row">
          <div>
            <NavLink to="/showroom" activeClassName="selected">Showroom </NavLink>
            <NavLink to="/resume" activeClassName="selected">Resume </NavLink>
            <NavLink to="/contact" activeClassName="selected">Contact </NavLink>
          </div>
        </h5>
      </nav>
      <br />
      <br />
    </header >
  );
}

export default Nav;
