import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function categorySelected(name) {
    console.log(`${name} clicked`)
}

function Nav() {
  const categories = [
    { name: "portfoilo", description: "Photos of my projects", },
    { name: "resume", description: "My resume" },
    { name: "links", description: "links to my professional social media" },
  ];

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Built By Ann-Marie!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
              {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;