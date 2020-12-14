import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "wordsearch",
      category: "portfolio",
      description: "Search a word",
    },
    {
      name: "myfoodchoice",
      category: "portfolio",
      description: "submit food allergies and favorite foods",
    },
    {
      name: "budget",
      category: "portfolio",
      description: "css heart",
    },
    {
      name: "codequiz",
      category: "portfolio",
      description: "css heart",
    },
    {
      name: "techblog",
      category: "portfolio",
      description: "css heart",
    },
    {
      name: "cssheart",
      category: "portfolio",
      description: "css heart",
    },
    {
      name: "me",
      category: "resume",
      description: "me",
    },

  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/projects/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
