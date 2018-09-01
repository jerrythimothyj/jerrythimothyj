/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GET_BLOG_DATA } from "./actions";
import { BlogItem } from "../../components";

const mapStateToProps = state => ({
  blogData: state.blog.blogData
});

const mapDispatchToProps = dispatch => ({
  onRequestBlogData: () => dispatch({ type: GET_BLOG_DATA })
});

class Blog extends Component {
  componentDidMount() {
    const { onRequestBlogData } = this.props;
    onRequestBlogData();
  }

  render() {
    const { blogData } = this.props;

    return (
      <div className="card-inner blog" id="blog-card">
        <div className="card-wrap">
          <div className="content blog">
            <div className="title">Latest Posts</div>
            <div className="row border-line-v">
              {blogData &&
                blogData.map((blog, index) => (
                  <BlogItem blog={blog} key={index} />
                ))}
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  blogData: PropTypes.array.isRequired,
  onRequestBlogData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
