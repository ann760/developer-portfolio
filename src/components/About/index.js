import React from "react";
import coverImage from "../../assets/images/cover/me-dev.jpg";

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <p>
        Hello, I'm Ann-Marie Orozco and I am a full stack web developer. I enjoy problem solving and have a
        passion for learning new things.  I believe acomplishing new skills keeps life fun.
      </p>
      <p>
  
        View my "Showroom" to see my sites or contact me whith any questions. Can't wait to hear from you!
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
