import React from "react";
import PropTypes from "prop-types";

function ProjectHeader(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-8 text-center">
          <br />
          <br />
          <h1 className="display-4 font-weight-bold">{props.projectTitle}</h1>
          {props.projectImage !== null && (
            <img className="img-fluid img-thumbnail" src={props.projectImage} />
          )}
        </div>
        <div className="col-sm-2" />
      </div>
    </div>
  );
}

ProjectHeader.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired
};

export default ProjectHeader;
