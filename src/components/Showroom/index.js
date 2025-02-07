import React from "react";
import Projects from "../PhotoList/index";
import githubLogo from "../../assets/images/github_logo.png";

const Showroom = () => {
  const listItems = Projects.map((project) =>
    <div className="thumbnail">
      <a href={project.link}
        key={project.name}>
        <img
          key={project.name}
          src={project.photo}
          alt={project.name}
          className="img-thumbnail"
        />
        <div className="name">
          {project.name}
          <a
            style={{ width: "50%" }}
            href={project.git}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={githubLogo} style={{ width: "10%" }} alt="GitHub logo" /></a>
        </div>
      </a>
    </div>
  );

  return (
    <section>
      <h3>Welcome to the Showroom</h3>
      <div className="parent">
        <ul>{listItems}</ul>
      </div>
    </section>
  );
}

export default Showroom;
