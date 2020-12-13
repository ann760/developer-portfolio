import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "wordsearch",
      category: "portfoilo",
      description: "Search a word",
    },
    {
      name: "myfoodchoice",
      category: "portfoilo",
      description: "submit food allergies and favorite foods",
    },
    {
      name: "cssheart",
      category: "portfoilo",
      description: "css heart",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/projects/${category}/${i}.jpg`)}
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
