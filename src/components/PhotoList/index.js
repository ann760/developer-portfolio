import React, { useState } from "react";

const PhotoList = (props) => {
  const [photos] = useState([
    {
      name: "wordsearch",
      category: "portfolio",
      description: "Search a word",
      link: "https://ann760.github.io/word-web/",
      git: "https://github.com/ann760/word_web"
    },
    {
      name: "myfoodchoice",
      category: "portfolio",
      description: "submit food allergies and favorite foods",
      link: "https://food-67923.herokuapp.com/login",
      git: "https://github.com/ann760/my-food-choices"
    },
    {
      name: "media-store",
      category: "portfolio",
      description: "Media-store",
      link: "https://floating-badlands-78581.herokuapp.com/",
      git: "https://github.com/ann760/media-store"
    },  
    {
      name: "codequiz",
      category: "portfolio",
      description: "css heart",
      link: "https://ann760.github.io/code-quiz/",
      git: "https://github.com/ann760/code-quiz"
    },
    {
      name: "techblog",
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
      name: "cssheart",
      category: "portfolio",
      description: "css heart",
      link: "https://codepen.io/ann760/details/vVWbVQ",
      git: ""
    },

  ]);

  return (
    <div className="thumbnail">
      <div className="flex-row">
        {photos.map((image, i) => (
         <a href={image.link}
           key={image.name}>
          <img
            src={require(`../../assets/images/projects/portfolio/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
          <ul class="social">
         <li><a href={image.git} aria-hidden="true"></a></li>
          <li><a href={image.description} aria-hidden="true"></a></li>
          </ul></a>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
