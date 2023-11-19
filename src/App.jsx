import React from "react";
import Navbar from "./components/Navbar";
import Me from "./components/Me";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/portfolio">
      <Switch>
        <Route path="/">
          <Navbar />
          <Me />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
