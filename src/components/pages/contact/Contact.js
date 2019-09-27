import React, { Component } from "react";
import EmailForm from "./EmailForm";
import { Link } from "react-router-dom";

export default class Contact extends Component {
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
      <div className="container mt-5">
        <div
          style={{ height: "100px" }}
          ref={ref => {
            this.$ref = ref;
          }}
        />

        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8 text-center">
            <div className="w-100 p-3" id="contact-me-wrapper">
              <div
                className="p-1 "
                style={{ backgroundColor: "rgb(71, 67, 80)" }}
              >
                <div
                  className="p-2 mx-auto"
                  style={{ backgroundColor: "rgb(255, 252, 249)" }}
                >
                  <h1 className="font-weight-bold display-4 pt-4 pb-0">
                    Get in touch!
                  </h1>
                  <div className="d-inline-block w-75">
                    <p className="lead featured-projects-font">
                      Inquries for any graphic design work or printing
                      opportunities as an upcoming artist should be sent to my
                      email, and feel free to follow my social media to keep up
                      to date with what I'm working on.
                    </p>
                    <p className="lead featured-projects-font">
                      See you soon :)
                    </p>
                    <a href="http://instagram.com/customluke">
                      <i className="fab fa-2x fa-instagram" />
                    </a>
                  </div>
                  <EmailForm />
                  <div style={{ height: "2vh" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
