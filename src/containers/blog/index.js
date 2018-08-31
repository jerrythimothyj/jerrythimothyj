import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_BLOG_DATA } from './actions';

const mapStateToProps = state => ({
  profileData: state.profile.profileData
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
    return (
      <div className="card-inner blog" id="blog-card">
        <div className="card-wrap">
          <div className="content blog">
            <div className="title">Latest Posts</div>

            <div className="row border-line-v">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                <div className="box-item">
                  <div className="image">
                    <a href="blog-post.html">
                      <img src="assets/images/blog/blog1.jpg" alt="" />
                      <span className="info">
                        <span className="ion ion-document-text" />
                      </span>
                      <span className="date">
                        <strong>20</strong>Jun
                      </span>
                    </a>
                  </div>
                  <div className="desc">
                    <a href="blog-post.html" className="name">
                      By spite about do of do allow blush
                    </a>
                    <div className="category">Design</div>
                  </div>
                </div>
              </div>

              <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                <div className="box-item">
                  <div className="image">
                    <a href="blog-post.html">
                      <img src="assets/images/blog/blog2.jpg" alt="" />
                      <span className="info">
                        <span className="ion ion-document-text" />
                      </span>
                      <span className="date">
                        <strong>19</strong>Jun
                      </span>
                    </a>
                  </div>
                  <div className="desc">
                    <a href="blog-post.html" className="name">
                      Two Before Arrow Not Relied
                    </a>
                    <div className="category">Coding</div>
                  </div>
                </div>
              </div>

              <div className="col col-d-12 col-t-12 col-m-12 border-line-h">
                <div className="box-item">
                  <div className="image">
                    <a href="blog-post.html">
                      <img src="assets/images/blog/blog3.jpg" alt="" />
                      <span className="info">
                        <span className="ion ion-document-text" />
                      </span>
                      <span className="date">
                        <strong>20</strong>Jun
                      </span>
                    </a>
                  </div>
                  <div className="desc">
                    <a href="blog-post.html" className="name">
                      By spite about do of do allow blush
                    </a>
                    <div className="category">Travel</div>
                  </div>
                </div>
              </div>

              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  onRequestBlogData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
