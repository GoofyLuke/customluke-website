import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/*
    Props for ProjectTeaser component:
        image -- String : the source of the image that we want to display as a preview to the user
        title -- String : the title of the project to display, something interesting
        description -- String : short description to display under the title, draw the user in
        linkToProject -- String : the link to the project's page for the user to click
*/
class ProjectTeaser extends Component {
  render() {
    const { image, title, description, linkToProject } = this.props;

    return (
      <div className="col-sm-6 col-md-6 p-3 text-center">
        <div className="thumbnail w-75 d-inline-block">
          <Link className="lightbox" to={linkToProject}>
            <img className="img-thumbnail" src={image} alt="" />
          </Link>
          <div className="caption">
            {title && (
              <h3 className="font-weight-bold text-center m-1">{title}</h3>
            )}
            {description && (
              <p className="text-center pb-5 lead">{description}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProjectTeaser.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkToProject: PropTypes.string.isRequired
};

export default ProjectTeaser;
