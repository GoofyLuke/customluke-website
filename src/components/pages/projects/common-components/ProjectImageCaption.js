import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProjectImageCaption extends Component {
  render() {
    return (
      <div className="text-center">
        <br />
        <hr className="w-75" />
        <br />
        <img className="img-fluid w-75 img-thumbnail" src={this.props.image} />
        {this.props.caption && (
          <h3>
            <br />
            {this.props.caption}
          </h3>
        )}
        <hr className="w-75" />
        <br />
      </div>
    );
  }
}

ProjectImageCaption.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};
