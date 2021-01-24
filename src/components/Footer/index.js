import React from "react";
import linkedinLogo from "../../assets/images/linkedin_logo.png";
import githubLogo from "../../assets/images/github_logo.png";

function Nav() {
  return (
    <footer>
      <h6>💻 Built with love by Ann-Marie Orozco ❤️.</h6>
      <div>
        <a
          href="https://www.linkedin.com/in/ann-marie-orozco-2218b925/"
          target="_blank"
        >
          {" "}
          <img src={linkedinLogo} style={{ width: "7%" }} alt="LinkedIn Logo" />{" "}
        </a>
        <a
          style={{ width: "20%" }}
          href="https://github.com/ann760"
          target="_blank"
        >
          {" "}
          <img src={githubLogo} style={{ width: "7%" }} alt="GitHub logo" />
        </a>
      </div>
    </footer>
  );
}

export default Nav;
