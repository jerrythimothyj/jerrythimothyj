import React from 'react';
import PropTypes from 'prop-types';

const BlogItem = props => (
  <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
    <div className="box-item">
      <div className="image">
        <a href="blog-post.html">
          <span className="info">
            <span className="ion ion-document-text" />
          </span>
          <span className="date">
            <strong>{props.blog.date_dd}</strong>
            {props.blog.date_mm}
          </span>
        </a>
      </div>
      <div className="desc">
        <a href="blog-post.html" className="name">
          {props.blog.title}
        </a>
        <div className="category">{props.blog.description}</div>
      </div>
    </div>
  </div>
);

BlogItem.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date_dd: PropTypes.string.isRequired,
    date_mm: PropTypes.string.isRequired,
    date_yyyy: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

export default BlogItem;
