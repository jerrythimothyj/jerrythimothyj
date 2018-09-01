import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RecommendationItem = props => (
  <div
    className={classNames(
      'resume-item',
      { 'border-line-h': !props.isLast },
      'active'
    )}
  >
    <div className="date">{props.recommendation.date}</div>
    <div className="name">{props.recommendation.name}</div>
    <div className="company">{props.recommendation.designation}</div>
    <p>{props.recommendation.text}</p>
  </div>
);

RecommendationItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  recommendation: PropTypes.shape({
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default RecommendationItem;
