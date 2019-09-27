import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FeaturedProjects extends Component {
  mobileFontSizeMainHeader = "3rem";
  websiteFontSizeMainHeader = "5rem";

  mobileFontSizeHeader = "2rem";
  websiteFontSizeHeader = "4rem";

  mobileFontSizeParagraph = "0.7rem";
  websiteFontSizeParagraph = "1.5rem";

  render() {
    return (
      <div>
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
          Featured Projects
        </h2>
        <hr className="w-25" />
        <div style={{ height: "1vh" }} />
        <div className="w-100 p-3" id="featured-projects-wrapper">
          <div
            className="h-50 d-flex p-1"
            style={{ backgroundColor: "rgb(71, 67, 80)" }}
          >
            <div
              className="d-flex p-2"
              style={{ backgroundColor: "rgb(255, 252, 249)" }}
            >
              <div className="w-50 p-2 d-flex align-items-center">
                <img
                  className="img-fluid"
                  src={require("../../../img/portfolio/2-much-sauce-menu.png")}
                />
              </div>
              <div className="w-50 p-2 text-right align-middle">
                <div className="d-inline-block" style={{ width: "95%" }}>
                  <h1
                    className="text-right"
                    style={{
                      fontSize:
                        window.innerWidth > 1000
                          ? this.websiteFontSizeHeader
                          : this.mobileFontSizeHeader
                    }}
                  >
                    2 Much Sauce Food Truck
                  </h1>
                  <p
                    className="lead featured-projects-font"
                    style={{
                      fontSize:
                        window.innerWidth > 1000
                          ? this.websiteFontSizeParagraph
                          : this.mobileFontSizeParagraph
                    }}
                  >
                    2MuchSauce Food Truck contacted a friend and I to work with
                    them to develop a flyer and a menu. My friend Joe had less
                    proficiency in photoshop at the time so I took the menu
                    offer and began designing my very first menu. This was one
                    of the most enjoyable projects for me because I really love
                    jumping out of my comfort zone making projects I've never
                    produced anything similar to before. This is a goal I stride
                    for in nearly everything I work on to go above and beyond in
                    art. 2018
                  </p>
                  <Link
                    className="d-flex justify-content-end align-items-center"
                    to="/too-much-sauce"
                  >
                    <p className="m-0 bg-contrast-text p-0 pr-2 button-text-responsive button-font">
                      READ MORE
                    </p>
                    <i
                      className={
                        window.innerWidth > 1000
                          ? "d-inline far fa-2x fa-hand-pointer"
                          : "d-inline far fa-hand-pointer"
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "3vh" }} />
          <div
            className="h-50 d-flex p-1"
            style={{
              backgroundColor: "rgb(71, 67, 80)",
              flexWrap: "wrap"
            }}
          >
            <div
              className="d-flex p-2"
              style={{ backgroundColor: "rgb(255, 252, 249)" }}
            >
              <div className="w-50 p-2 text-left">
                <div className="d-inline-block" style={{ width: "95%" }}>
                  <h1
                    className="title-responsive"
                    style={{
                      fontSize:
                        window.innerWidth > 1000
                          ? this.websiteFontSizeHeader
                          : this.mobileFontSizeHeader
                    }}
                  >
                    AirBnb Map
                  </h1>
                  <p
                    className="lead featured-projects-font"
                    style={{
                      fontSize:
                        window.innerWidth > 1000
                          ? this.websiteFontSizeParagraph
                          : this.mobileFontSizeParagraph
                    }}
                  >
                    This summer my friend contacted me with a client in need of
                    a map for an Airbnb. The client had a large estate so a map
                    was needed for navigation. The client called me and
                    discussed what was needed. Over the next weeks I created a
                    map from scratch without ever visiting the area by using
                    satellite imaging technologies along with drone image
                    capturing and photos of the area to understand a sense of
                    what it looks like. Then I got to work. The result turned
                    out great and the process was around 2 weeks to finish. 2019
                  </p>
                  <Link className="d-flex align-items-center" to="/airbnb-map">
                    <i
                      className={
                        window.innerWidth > 1000
                          ? "d-inline far fa-2x fa-hand-pointer fa-flip-horizontal"
                          : "d-inline far fa-hand-pointer fa-flip-horizontal"
                      }
                    />
                    <p className="m-0 bg-contrast-text p-0 pl-2 button-text-responsive button-font">
                      READ MORE
                    </p>
                  </Link>
                </div>
              </div>
              <div className="w-50 p-2 d-flex align-items-center">
                <img
                  className="img-fluid"
                  src={require("../../../img/portfolio/airbnbMap.PNG")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
