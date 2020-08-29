import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
