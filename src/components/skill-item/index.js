import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SkillItem = props => (
  <li className={classNames({ 'border-line-h': !props.isLast })}>
    <div className="name">{props.skill.name}</div>
    <div className="progress">
      <div className="percentage" style={{ width: props.skill.rating }} />
    </div>
  </li>
);

SkillItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillItem;
