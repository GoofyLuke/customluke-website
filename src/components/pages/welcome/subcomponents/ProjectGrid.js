import React, { Component } from "react";
import ProjectTeaser from "./ProjectTeaser";

class ProjectGrid extends Component {
  mobileFontSizeMainHeader = "3rem";
  websiteFontSizeMainHeader = "5rem";

  render() {
    return (
      <div id="project-grid-wrapper">
        <hr className="w-25" />
        <h2
          className="bg-contrast-text header-outline-3d-font"
          style={{
            fontSize:
              window.innerWidth > 1000
                ? this.websiteFontSizeMainHeader
                : this.mobileFontSizeMainHeader
          }}
        >
          Other Projects
        </h2>
        <hr className="w-25" />
        <div style={{ height: "1vh" }} />

        <div className="container gallery-container text-center">
          <div className="tz-gallery">
            <div className="row">
              <ProjectTeaser
                image={require("../../../../img/portfolio/space-2016.png")}
                linkToProject="/space-digital-art"
              />
              <ProjectTeaser
                image={require("../../../../img/portfolio/album-cover-1.png")}
                linkToProject="/junction-album-cover"
              />
              <ProjectTeaser
                image={require("../../../../img/portfolio/abstract-outline.png")}
                linkToProject="/abstract-pattern"
              />
              <ProjectTeaser
                image={require("../../../../img/portfolio/illustration.png")}
                linkToProject="/illustration"
              />
              <ProjectTeaser
                image={require("../../../../img/portfolio/packaging-artboard.png")}
                linkToProject="/trident-package"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectGrid;
