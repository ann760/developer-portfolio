import React, { useState } from "react";

const PhotoList = (props) => {
  const [photos] = useState([
    {
      name: "wordsearch",
      category: "portfolio",
      description: "Search a word",
      link: "https://ann760.github.io/word-web/"
    },
    {
      name: "myfoodchoice",
      category: "portfolio",
      description: "submit food allergies and favorite foods",
      link: "https://food-67923.herokuapp.com/login"
    },
    {
      name: "media-store",
      category: "portfolio",
      description: "Media-store",
      link: "https://floating-badlands-78581.herokuapp.com/"
    },  
    {
      name: "codequiz",
      category: "portfolio",
      description: "css heart",
      link: "https://ann760.github.io/code-quiz/"
    },
    {
      name: "techblog",
      category: "portfolio",
      description: "tech blog",
      link: "https://peaceful-garden-31793.herokuapp.com/"
    },
    {
      name: "budget",
      category: "portfolio",
      description: "budget",
      link: "https://budget-76695.herokuapp.com/"
    },
    {
      name: "cssheart",
      category: "portfolio",
      description: "css heart",
      link: "https://codepen.io/ann760/details/vVWbVQ"
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
            
          /></a>
         
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
