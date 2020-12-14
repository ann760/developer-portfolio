import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Showroom from "./components/Showroom";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    { name: "portfolio", description: "Photos of my projects" },
    { name: "resume", description: "My resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>   
            <Showroom currentCategory={currentCategory}></Showroom>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
