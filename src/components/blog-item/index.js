import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BlogItem = props => (
  <div
    className={classNames(
      'resume-item',
      { 'border-line-h': !props.isLast },
      'active'
    )}
  >
    <a
      href={props.blog.link}
      className="name"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="date">{props.blog.title}</div>
      <div className="company">{props.blog.description}</div>
    </a>
  </div>
);

BlogItem.propTypes = {
  isLast: PropTypes.bool.isRequired,
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

export default BlogItem;
