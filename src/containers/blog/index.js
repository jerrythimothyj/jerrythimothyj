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
          <div className="content resume">
            <div className="title">Latest Posts</div>

            <div className="row">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                <div className="resume-items">
                  {blogData &&
                    blogData.map((blog, index) => (
                      <BlogItem
                        blog={blog}
                        key={index}
                        isLast={index === blogData.length - 1}
                      />
                    ))}
                  <div className="clear" />
                </div>
              </div>
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
