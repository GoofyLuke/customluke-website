import React, { Component } from "react";
import "./css/App.css";
import { HashRouter, Route } from "react-router-dom";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/pages/contact/Contact";
import About from "./components/pages/about/About";
import TemplateFile from "./components/pages/projects/project-pages/TemplateFile";
import TooMuchSaucePage from "./components/pages/projects/project-pages/TooMuchSaucePage";
import TridentPackage from "./components/pages/projects/project-pages/TridentPackage";
import AbstractPatternPage from "./components/pages/projects/project-pages/AbstractPatternPage";
import IllustrationPage from "./components/pages/projects/project-pages/IllustrationPage";
import DigitalSpacePage from "./components/pages/projects/project-pages/DigitalSpacePage";
import AlbumCover from "./components/pages/projects/project-pages/AlbumCover";
import AirbnbMap from "./components/pages/projects/project-pages/AirbnbMap";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ overflowX: "hidden" }}>
        <HashRouter>
          <header>
            <Navbar />
          </header>
          <body>
            <Route exact={true} path="/" component={ProjectsPage} />
            <Route
              exact={true}
              path="/too-much-sauce"
              component={TooMuchSaucePage}
            />
            <Route
              exact={true}
              path="/trident-package"
              component={TridentPackage}
            />
            <Route
              exact={true}
              path="/abstract-pattern"
              component={AbstractPatternPage}
            />
            <Route
              exact={true}
              path="/illustration"
              component={IllustrationPage}
            />
            <Route
              exact={true}
              path="/space-digital-art"
              component={DigitalSpacePage}
            />
            <Route
              exact={true}
              path="/junction-album-cover"
              component={AlbumCover}
            />
            <Route exact={true} path="/airbnb-map" component={AirbnbMap} />
            <Route exact={true} path="/contact" component={Contact} />
            <Route exact={true} path="/about" component={About} />
            <div style={{ height: "10vh" }} />
            <Footer />
          </body>
        </HashRouter>
      </div>
    );
  }
}

export default App;
