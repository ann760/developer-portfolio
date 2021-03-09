import React from "react";
import PhotoList from "../PhotoList";

function Showroom(props) {
  return (
    <section>
      <h1 data-testid="h1tag">Welcome to the Showroom</h1>
      <PhotoList />
    </section>
  );
}
export default Showroom;
