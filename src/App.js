import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Showroom from "./components/Showroom";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <div className="content">
          <Route path="/" render={() => (<Redirect to="/developer-portfolio" />)} />
          <Route path="/showroom" component={Showroom} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/resume" component={Resume} />
        </div>
        <About />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
