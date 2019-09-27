import React, { Component } from "react";

export default class DigitalSpacePage extends Component {
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
                      src={require("../../../../img/portfolio/space-main.jpg")}
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
                    &nbsp; &nbsp; These are my first pieces of work I was really
                    proud of so I decided to throw them up on the portfolio too!
                    I really like the usage of colors I used in these to create
                    a surreal space vibe. The secret to the images is that all
                    mediums used to make these were taken from my phone. I
                    snagged a picture of cracked earth and spherized it to
                    simulate a planet as well as fake shadows.
                  </p>
                </div>
                <div style={{ height: "2vh" }} />
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
                      src={require("../../../../img/portfolio/space-2.jpg")}
                    />
                  </div>
                </div>
                <div style={{ height: "2vh" }} />
                <div
                  className={
                    window.innerWidth > 1000 ? "w-75 d-inline-block" : ""
                  }
                >
                  <p
                    className="lead text-left main-paragraph-font"
                    style={{
                      fontSize:
                        window.innerWidth > 1000
                          ? this.websiteFontSizeParagraph
                          : this.mobileFontSizeParagraph
                    }}
                  >
                    &nbsp; &nbsp; For the second one its a picture of some rust
                    from an old table spherized as well. Even the space dust in
                    the photos is just a picture of some clouds I took - I
                    overlayed the clouds onto a black background to create the
                    effect it is space dust and brushed over some color on it.
                    Lastly the tiny stars and planets were created using a
                    monochromatic photoshop document full of little white and
                    black pixels, then Gaussian blurring it from the filters,
                    and finally upping the levels so only some of the white dots
                    are visible. If you use the right amount of leveling, it
                    will appear there are specs that are identical to little
                    stars across your screen nicely spread out. That is how i
                    created a surreal what looks like space in a matter of an
                    hour using just adobe photoshop and a camera.
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
