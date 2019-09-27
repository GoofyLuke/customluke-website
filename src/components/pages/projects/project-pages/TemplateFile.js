import React, { Component } from "react";

export default class TemplateFile extends Component {
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
                      src={require("../../../../img/portfolio/2much-header.png")}
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
                    &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Viverra accumsan in nisl nisi.
                    Faucibus turpis in eu mi bibendum neque. Non nisi est sit
                    amet. Pharetra pharetra massa massa ultricies. Tellus orci
                    ac auctor augue. Aliquet risus feugiat in ante. Amet
                    consectetur adipiscing elit pellentesque habitant morbi.
                    Tortor posuere ac ut consequat semper viverra. Suspendisse
                    interdum consectetur libero id faucibus nisl tincidunt eget
                    nullam. Id eu nisl nunc mi ipsum faucibus. Suscipit
                    adipiscing bibendum est ultricies integer. Tempus egestas
                    sed sed risus pretium quam vulputate. Aenean et tortor at
                    risus viverra adipiscing at. Mollis aliquam ut porttitor leo
                    a diam sollicitudin tempor id. Elit ullamcorper dignissim
                    cras tincidunt lobortis feugiat vivamus. Parturient montes
                    nascetur ridiculus mus mauris. Nisi lacus sed viverra tellus
                    in hac habitasse platea.
                  </p>
                  <p
                    className="lead text-left main-paragraph-font"
                    style={{
                      fontSize:
                        window.innerWidth > 1000
                          ? this.websiteFontSizeParagraph
                          : this.mobileFontSizeParagraph
                    }}
                  >
                    &nbsp; &nbsp; Quam pellentesque nec nam aliquam sem et
                    tortor consequat id. Sit amet nisl suscipit adipiscing
                    bibendum est. Libero id faucibus nisl tincidunt. Et ultrices
                    neque ornare aenean euismod elementum. Amet luctus venenatis
                    lectus magna fringilla urna porttitor. Massa tempor nec
                    feugiat nisl pretium fusce id. Quis imperdiet massa
                    tincidunt nunc pulvinar sapien. Dui faucibus in ornare quam.
                    Vel fringilla est ullamcorper eget nulla facilisi etiam.
                    Consectetur adipiscing elit duis tristique sollicitudin.
                    Quis hendrerit dolor magna eget est lorem ipsum dolor. Proin
                    sed libero enim sed. Blandit volutpat maecenas volutpat
                    blandit aliquam etiam erat velit scelerisque. Sit amet est
                    placerat in egestas erat.
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
