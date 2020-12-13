import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Showroom(props) {
    const { currentCategory } = props;
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Showroom;
