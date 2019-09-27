import React, { Component } from "react";

export default class TridentPackage extends Component {
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
                      src={require("../../../../img/portfolio/packaging-artboard.png")}
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
                      <p className="lead m-0">&nbsp; &nbsp;Adobe Illustrator</p>
                    </li>
                    <li className="p-0">
                      <p className="lead m-0">
                        &nbsp; &nbsp;Laser Cutting Machine
                      </p>
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
                    &nbsp; &nbsp; The Trident "Tropical Beat" packaging is a
                    mockup design I created. This mockup is no way affiliated
                    with Trident and was made to show my artistic talents and
                    what I am capable of. I got a great summery vibe from the
                    advertising ploys of this new gum and with that thought i
                    went to work. With the surfboards, boardwalk, clouds and
                    soft squishy gum pieces underneath the ground. I created the
                    piece using my knowledge of negative and positive space
                    along with a laser cutter, sketches, and adobe
                    photoshop/illustrator. 2019
                  </p>
                </div>
                <div
                  className="d-inline-block p-1"
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
                      src={require("../../../../img/portfolio/packaging.jpeg")}
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
