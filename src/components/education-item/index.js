import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const EducationItem = props => (
  <div
    className={classNames('resume-item', { 'border-line-h': !props.isLast })}
  >
    <div className="date">{props.education.year}</div>
    <div className="name">{props.education.course}</div>
    <div className="company">{props.education.institute}</div>
  </div>
);

EducationItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  education: PropTypes.shape({
    year: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationItem;
