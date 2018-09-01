/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GET_RECOMMENDATIONS_DATA } from "./actions";
import { RecommendationItem } from "../../components";

const mapStateToProps = state => ({
  recommendationsData: state.recommendations.recommendationsData
});

const mapDispatchToProps = dispatch => ({
  onRequestRecommendationsData: () =>
    dispatch({ type: GET_RECOMMENDATIONS_DATA })
});

class About extends Component {
  componentDidMount() {
    const { onRequestRecommendationsData } = this.props;
    onRequestRecommendationsData();
  }

  render() {
    const { recommendationsData } = this.props;

    return (
      <div className="card-inner animated active" id="about-card">
        <div className="card-wrap">
          <div className="content about">
            <div className="title">About Me</div>

            <div className="row">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                <div className="text-box">
                  <p>
                    Playing with Javascript - React - Angular - Node -
                    Typescript - HTML - CSS - Bootstrap - Material - PHP - SQL -
                    DevOps - Agile ... and their friends...
                  </p>
                </div>
                <div className="info-list">
                  <ul>
                    <li>
                      <strong>Age . . . . .</strong> 28
                    </li>
                    <li>
                      <strong>Residence . . . . .</strong> India
                    </li>
                    <li>
                      <strong>Freelance . . . . .</strong> Available
                    </li>
                    <li>
                      <strong>Address . . . . .</strong> Bangalore, India
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>

          <div className="content services">
            <div className="title">My Services</div>

            <div className="row service-items border-line-v">
              <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                <div className="service-item">
                  <div className="icon">
                    <span className="ion ion-code" />
                  </div>
                  <div className="name">UI Development</div>
                  <p>
                    Developing web application with React and Angular with
                    super-reusable components.
                  </p>
                </div>
              </div>

              <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                <div className="service-item">
                  <div className="icon">
                    <span className="ion ion-code" />
                  </div>
                  <div className="name">Web Development</div>
                  <p>
                    Developing web application with Php and Front End
                    Frameworks.
                  </p>
                </div>
              </div>

              <div className="clear" />
            </div>
          </div>

          <div className="content pricing">
            <div className="title">Pricing</div>

            <div className="row pricing-items">
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="pricing-item">
                  <div className="icon">
                    <i className="ion ion-speedometer speed-basic" />
                  </div>
                  <div className="name">Basic</div>
                  <div className="amount">
                    <span className="dollar">$</span>
                    <span className="number">10</span>
                    <span className="period">hour</span>
                  </div>
                  <div className="feature-list">
                    <ul>
                      <li>UI Development</li>
                      <li className="disable">Php Backend</li>
                      <li className="disable">Deployment</li>
                    </ul>
                  </div>
                  <div className="lnks">
                    <a
                      href="mailto:?subject=Buy Basic&body=Hi, I would like to buy basic package."
                      className="lnk"
                    >
                      <span className="text">Buy Basic</span>
                      <i className="ion ion-speedometer speed-basic" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="pricing-item">
                  <div className="icon">
                    <i className="ion ion-speedometer" />
                  </div>
                  <div className="name">Pro</div>
                  <div className="amount">
                    <span className="dollar">$</span>
                    <span className="number">15</span>
                    <span className="period">hour</span>
                  </div>
                  <div className="feature-list">
                    <ul>
                      <li>Web Development</li>
                      <li>Php Backend</li>
                      <li>Deployment</li>
                    </ul>
                  </div>
                  <div className="lnks">
                    <a
                      href="mailto:?subject=Buy Pro&body=Hi, I would like to buy pro package."
                      className="lnk"
                    >
                      <span className="text">Buy Pro</span>
                      <i className="ion ion-speedometer" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="clear" />
            </div>
          </div>

          <div className="content resume">
            <div className="title">Recommendations</div>

            <div className="row">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                <div className="resume-items">
                  {recommendationsData &&
                    recommendationsData.map((recommendation, index) => (
                      <RecommendationItem
                        recommendation={recommendation}
                        index={index}
                        isLast={index === recommendationsData.length - 1}
                        key={index}
                      />
                    ))}
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

About.propTypes = {
  recommendationsData: PropTypes.array.isRequired,
  onRequestRecommendationsData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
