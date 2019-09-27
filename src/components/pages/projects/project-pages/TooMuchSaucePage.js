import React, { Component } from "react";

export default class TooMuchSaucePage extends Component {
  componentDidMount() {
    this.$ref.scrollIntoView({
      // optional params
      behaviour: "smooth",
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
              <div
                className="w-100 p-3 text-center"
                id="project-section-wrapper"
              >
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
                      src={require("../../../../img/portfolio/2much-header.png")}
                    />
                  </div>
                </div>
                <div style={{ height: "2vh" }} />
                <div
                  className={
                    window.innerWidth > 1000
                      ? "w-75 d-inline-block text-left"
                      : "text-left"
                  }
                >
                  <h5 className="text-left">Tools / Software Used:</h5>
                  <ul>
                    <li className="p-0">
                      <p className="lead m-0"> &nbsp; &nbsp;Adobe Photoshop</p>
                    </li>
                    <li className="p-0">
                      <p className="lead m-0">&nbsp; &nbsp;Adobe Illustrator</p>
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
                    &nbsp; &nbsp; 2MuchSauce Food Truck contacted a friend and I
                    to work with them to develop a flyer and a menu. I wanted a
                    challenge so I took the menu offer and began designing my
                    very first menu. This was one of the most enjoyable projects
                    for me because I really have fun jumping a bit out of my
                    comfort zone making projects I've never produced anything
                    similar to before. This is a goal I stride for in nearly
                    everything I work on to go above and beyond because I am
                    dedicated and have a love for design.
                  </p>
                </div>
                <div
                  className="d-inline-block  p-1"
                  style={
                    window.innerWidth > 1000
                      ? { backgroundColor: "rgb(71, 67, 80)", width: "75%" }
                      : { backgroundColor: "rgb(71, 67, 80)" }
                  }
                >
                  <div
                    className="p-2"
                    style={{ backgroundColor: "rgb(255, 252, 249)" }}
                  >
                    <img
                      className="w-100"
                      src={require("../../../../img/portfolio/2-much-sauce-menu.png")}
                    />
                  </div>
                </div>
              </div>
              <div style={{ height: "6vh" }} />
            </div>
            <div className="col-xs-2" />
          </div>
        </div>
      </div>
    );
  }
}
