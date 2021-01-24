import React from "react";
import {NavLink} from "react-router-dom";

function Nav(props) {
 
  return (
    <header className="flex-row px-1">
      <h2> 
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            Ann-Marie Orozco 💻
          </span>{" "}
        </a>
      </h2>
      <nav> 
        <h5 className="flex-row">
        <div>
        <div>
        <NavLink to="/about" activeClassName="selected">About </NavLink>
        <NavLink to="/showroom" activeClassName="selected">Showroom </NavLink>
        <NavLink to="/contact" activeClassName="selected">Contact </NavLink>
        <NavLink to="/resume" activeClassName="selected">Resume </NavLink>
        </div>
        </div>
        </h5>
      </nav>
      <br/>
      <br/>
    </header>
  );
}

export default Nav;
