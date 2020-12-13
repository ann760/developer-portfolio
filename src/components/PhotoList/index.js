import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "wordsearch",
      category: "portfolio",
      description: "Search a word",
    },
    {
      name: "wordsearchModel",
      category: "portfolio",
      description: "submit food allergies and favorite foods",
    },
    {
      name: "wordsearchModel1",
      category: "portfolio",
      description: "css heart",
    },
    {
      name: "cssheart",
      category: "portfolio",
      description: "css heart",
    }
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
