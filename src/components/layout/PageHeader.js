import React, { Component } from "react";
import "./css/layout.css";

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header-image">
        <div
          className="container"
          style={{ backgroundImage: "url(../../../../img/headerbanner.jpg)" }}
        >
          <div className="row header-container" style={{ height: "37%" }} />
          <div className="col-xs-12 text-center">
            <h1 className="welcome-header-text">{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
