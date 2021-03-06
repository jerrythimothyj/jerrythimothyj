/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GET_ABOUT_DATA, GET_RECOMMENDATIONS_DATA } from "./actions";
import { RecommendationItem } from "../../components";

const mapStateToProps = state => ({
  aboutData: state.about.aboutData,
  recommendationsData: state.about.recommendationsData
});

const mapDispatchToProps = dispatch => ({
  onRequestAboutData: () => dispatch({ type: GET_ABOUT_DATA }),
  onRequestRecommendationsData: () =>
    dispatch({ type: GET_RECOMMENDATIONS_DATA })
});

class About extends Component {
  componentDidMount() {
    const { onRequestAboutData, onRequestRecommendationsData } = this.props;
    onRequestAboutData();
    onRequestRecommendationsData();
  }

  render() {
    const { aboutData, recommendationsData } = this.props;

    return (
      <div className="card-inner animated active" id="about-card">
        <div className="card-wrap">
          <div className="content about">
            <div className="title">About Me</div>

            <div className="row">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                <div className="text-box">
                  <p>{aboutData.intro}</p>
                </div>
                <div className="info-list">
                  <ul>
                    <li>
                      <strong>Age . . . . .</strong> {aboutData.age}
                    </li>
                    <li>
                      <strong>Residence . . . . .</strong> {aboutData.residence}
                    </li>
                    <li>
                      <strong>Freelance . . . . .</strong> {aboutData.freelance}
                    </li>
                    <li>
                      <strong>Address . . . . .</strong> {aboutData.address}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>

          {aboutData.services.length > 0 && (
            <div className="content services">
              <div className="title">My Services</div>

              <div className="row service-items border-line-v">
                <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                  <div className="service-item">
                    <div className="icon">
                      <span className="ion ion-code" />
                    </div>
                    <div className="name">{aboutData.services[0].name}</div>
                    <p>{aboutData.services[0].description}</p>
                  </div>
                </div>

                <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                  <div className="service-item">
                    <div className="icon">
                      <span className="ion ion-code" />
                    </div>
                    <div className="name">{aboutData.services[1].name}</div>
                    <p>{aboutData.services[1].description}</p>
                  </div>
                </div>

                <div className="clear" />
              </div>
            </div>
          )}

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
  aboutData: PropTypes.shape({
    intro: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    residence: PropTypes.string.isRequired,
    freelance: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired,
    pricings: PropTypes.array.isRequired
  }).isRequired,
  recommendationsData: PropTypes.array.isRequired,
  onRequestAboutData: PropTypes.func.isRequired,
  onRequestRecommendationsData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
