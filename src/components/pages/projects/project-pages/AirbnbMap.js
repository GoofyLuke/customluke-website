import React, { Component } from "react";

export default class AirbnbMap extends Component {
  componentDidMount() {
    this.$ref.scrollIntoView({
      // optional params
      block: "start",
      inline: "center"
    });
  }

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
              <div className="w-100 p-3 text-center" id="about-section-wrapper">
                <div
                  className="d-inline-block  h-50 p-1"
                  style={
                    window.innerWidth > 1000
                      ? { backgroundColor: "rgb(71, 67, 80)", width: "75%" }
                      : { backgroundColor: "rgb(71, 67, 80)" }
                  }
                >
                  <div
                    className="p-2 "
                    style={{ backgroundColor: "rgb(255, 252, 249)" }}
                  >
                    <img
                      className="w-100"
                      src={require("../../../../img/portfolio/airbnbMap.PNG")}
                    />
                  </div>
                </div>
                <div style={{ height: "2vh" }} />
                <div
                  className={
                    window.innerWidth > 1000 ? "w-75 d-inline-block" : ""
                  }
                >
                  <h5 className="text-left">Tools / Software Used:</h5>
                  <ul className="text-left">
                    <li className="p-0">
                      <p className="lead m-0">&nbsp; &nbsp;Adobe Photoshop</p>
                      <p className="lead m-0">&nbsp; &nbsp;Adobe Illustrator</p>
                      <p className="lead m-0">&nbsp; &nbsp;Drone Imagery</p>
                    </li>
                  </ul>

                  <hr className="w-100" />
                  <p
                    className="lead text-left main-paragraph-font"
                    style={{
                      fontSize:
                        window.innerWidth > 1000
                          ? this.websiteFontSizeParagraph
                          : this.mobileFontSizeParagraph
                    }}
                  >
                    &nbsp; &nbsp; This summer my friend contacted me with a
                    client in need of a map for an Airbnb. The client had a
                    large estate so a map was needed for navigation. The client
                    called me and discussed what was needed. Over the next weeks
                    I created a map from scratch without ever visiting the area
                    by using satellite imaging technologies along with drone
                    image capturing and photos of the area to understand a sense
                    of what it looks like. Then I got to work. The result turned
                    out great and the process was around 2 weeks to finish.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-2" />
          </div>
        </div>
      </div>
    );
  }
}
