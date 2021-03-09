import React, { useState } from "react";
import githubLogo from "../../assets/images/github_logo.png";

const PhotoList = (props) => {
  const [photos] = useState([
    {
      name: "word search",
      category: "portfolio",
      description: "Search a word",
      link: "https://ann760.github.io/word-web/",
      git: "https://github.com/ann760/word_web"
    },
    {
      name: "my food choice",
      category: "portfolio",
      description: "submit food allergies and favorite foods",
      link: "https://food-67923.herokuapp.com/login",
      git: "https://github.com/ann760/my-food-choices"
    },
    {
      name: "media store",
      category: "portfolio",
      description: "Media-store",
      link: "https://floating-badlands-78581.herokuapp.com/",
      git: "https://github.com/ann760/media-store"
    },  
    {
      name: "code quiz",
      category: "portfolio",
      description: "css heart",
      link: "https://ann760.github.io/code-quiz/",
      git: "https://github.com/ann760/code-quiz"
    },
    {
      name: "tech blog",
      category: "portfolio",
      description: "tech blog",
      link: "https://peaceful-garden-31793.herokuapp.com/",
      git:"https://github.com/ann760/tech-blog"
    },
    {
      name: "budget",
      category: "portfolio",
      description: "budget",
      link: "https://budget-76695.herokuapp.com/",
      git: "https://github.com/ann760/budget-tracker-pwa"
    },
    {
      name: "css heart",
      category: "portfolio",
      description: "css heart",
      link: "https://codepen.io/ann760/details/vVWbVQ",
      git: ""
    },

  ]);

  return (
    <div className="parent">
    
       
          {photos.map((image, i) => (
          <a href={image.link}
            key={image.name}>
            <img
              src={require(`../../assets/images/projects/portfolio/${i}.jpg`).default}
              alt={image.name}
              className="img-thumbnail"
              key={image.name}
              />
                <div className="flex-row">
                <p> {image.name}</p>
                </div>
                <div>
                <a
                    style={{ width: "20%" }}
                    href={image.git}
                    target="_blank"
                  >
                {" "}
                <img src={githubLogo} style={{ width: "7%" }} alt="GitHub logo" /></a> 
                </div>
          </a>
          ))}
      
    </div>
  );
};

export default PhotoList;
