import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ExperienceItem = props => (
  <div
    className={classNames(
      'resume-item',
      { 'border-line-h': !props.isLast },
      { active: props.isFirst }
    )}
  >
    <div className="date">
      {props.experience.dateFrom} - {props.experience.dateTo}
    </div>
    <div className="name">{props.experience.designation}</div>
    <div className="company">{props.experience.organization}</div>
  </div>
);

ExperienceItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  experience: PropTypes.shape({
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired
  }).isRequired
};

export default ExperienceItem;
