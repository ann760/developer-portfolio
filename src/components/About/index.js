import React from "react";
import coverImage from "../../assets/images/cover/me-dev2.jpg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <section>
      <h3 id="about">Who am I?</h3>
      <h1>I am
        <NavLink to="/developer-portfolio"> Ann-Marie Orozco </NavLink>
      </h1>
      <br></br>
      <p>
        Hello, I'm Ann-Marie Orozco and I am a full stack web developer. I enjoy problem solving and have a
        passion for learning new things.  I believe acomplishing new skills keeps life fun.
      </p>
      <p>

        View my <NavLink to="/showroom">
          <span >
            {" "}
            "Showroom"
          </span>{" "}
        </NavLink> contact me at anniedillier@gmail.com.
      </p>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
