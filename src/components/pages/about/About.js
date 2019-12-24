import React, { Component } from "react";
import FeaturedProjects from "./FeaturedProjects";

export default class About extends Component {
  render() {
    return (
      <div className="w-100 p-3 text-center" id="about-section-wrapper">
        <div
          className="d-inline-block  h-50 p-1"
          style={{ backgroundColor: "rgb(71, 67, 80)", width: "75%" }}
        >
          <div
            className="p-2 "
            style={{ backgroundColor: "rgb(255, 252, 249)" }}
          >
            <img className="w-100" src={require("../../../img/header.jpeg")} />
          </div>
        </div>
        <div style={{ height: "2vh" }} />
        <div className={window.innerWidth > 1000 ? "w-75 d-inline-block" : ""}>
          <p
            className="lead text-left main-paragraph-font"
            style={{
              fontSize:
                window.innerWidth > 1000
                  ? this.websiteFontSizeParagraph
                  : this.mobileFontSizeParagraph
            }}
          >
            &nbsp; &nbsp; Hi! I'm Luke Kenny, I'm a nineteen year old majoring
            in Digital and Studio Art at Oneonta State. On top of this, I'm also
            a freelance graphic designer. I have a keen eye for design and have
            worked with various groups and companies to make ideas to come to
            life. I have been doing graphic design for 3+ years but only started
            it professionally within the last year. I hope to work with more
            brands and businesses as I grow and continue to provide high quality
            work. Contacting me is easy! Just click{" "}
            <a className="text-primary" href="#/contact">
              here
            </a>{" "}
            and get in touch.
          </p>
        </div>
      </div>
    );
  }
}
