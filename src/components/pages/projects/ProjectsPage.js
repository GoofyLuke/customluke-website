import React, { Component } from "react";
import ProjectGrid from "../welcome/subcomponents/ProjectGrid";
import { Link } from "react-router-dom";
import FeaturedProjects from "../about/FeaturedProjects";
import About from "../about/About";

class ProjectsPage extends Component {
  componentDidMount() {
    this.$ref.scrollIntoView({
      // optional params
      behaviour: "smooth",
      block: "start",
      inline: "center"
    });
  }

  mobileFontSizeMainHeader = "3rem";
  websiteFontSizeMainHeader = "5rem";

  mobileFontSizeHeader = "2rem";
  websiteFontSizeHeader = "4rem";

  mobileFontSizeParagraph = "0.9rem";
  websiteFontSizeParagraph = "1.7rem";

  render() {
    return (
      <div style={{ backgroundColor: "rgb(252, 252, 252)" }}>
        <div
          ref={ref => {
            this.$ref = ref;
          }}
        />
        <div style={{ height: "100px" }} />
        <div className="container">
          <div className="row">
            <div className="col-xs-2" />

            <div className="col-xs-8 text-center">
              {/* About section 
                  - Main header of landing page
                  - Introduction paragraph on landing
              */}
              <About />

              <div style={{ height: "6vh" }} />

              {/* Featured Projects section 
                  - main two featured projects at the time
                  - links to project pages  
              */}
              <FeaturedProjects />
            </div>
            <div className="col-xs-2" />
          </div>
          <div style={{ height: "6vh" }} />

          <div className="row">
            <div className="col-xs-2" />
            <div className="col-xs-8 text-center">
              <ProjectGrid />
            </div>

            <div className="col-xs-2" />
          </div>
        </div>
        <div style={{ height: "6vh" }} />
      </div>
    );
  }
}

export default ProjectsPage;
