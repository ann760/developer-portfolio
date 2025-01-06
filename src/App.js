import React from "react";
import { pdfjs } from 'react-pdf';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Showroom from "./components/Showroom";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Route path="/developer-portfolio" render={() => (<Redirect to="/about" />)} />
        <div className="content">
          <Route path="/showroom" component={Showroom} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
