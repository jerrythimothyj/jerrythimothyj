/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const WorkItem = props => (
  <div
    className={classNames(
      "col col-d-6 col-t-6 col-m-12 grid-item",
      props.work.type,
      "border-line-h"
    )}
  >
    <div className="box-item">
      <div className="image">
        <a href={`#popup-${props.index}`} className="has-popup-media">
          <img src={`assets/images/works/${props.work.image}`} alt="" />
          <span className="info">
            <span className="ion ion-images" />
          </span>
        </a>
      </div>
      <div className="desc">
        <a href={`#popup-${props.index}`} className="name has-popup-media">
          {props.work.name}
        </a>
        <div className="category">{props.work.type}</div>
      </div>
      <div id={`popup-${props.index}`} className="popup-box mfp-fade mfp-hide">
        <div className="content">
          <div className="image">
            <img src={`assets/images/works/${props.work.image}`} alt="" />
          </div>
          <div className="desc">
            <div className="post-box">
              <h1>{props.work.name}</h1>
              <div className="blog-detail">{props.work.type}</div>
              <div className="blog-content">
                <p>{props.work.description}</p>
                <ul className="list-style">
                  {props.work.techStack &&
                    props.work.techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                </ul>
              </div>
              <a href={props.work.link} className="button">
                <span className="text">View Project</span>
                <span className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

WorkItem.propTypes = {
  work: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default WorkItem;
