import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Showroom from "./components/Showroom";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    { name: "portfoilo", description: "Photos of my projects" },
    { name: "resume", description: "My resume" },
    { name: "links", description: "links to my professional social media" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <ContactForm></ContactForm>
          <Showroom currentCategory={currentCategory}></Showroom>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
