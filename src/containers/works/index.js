/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GET_WORKS_DATA } from "./actions";
import { WorkItem } from "../../components";

const mapStateToProps = state => ({
  worksData: state.works.worksData
});

const mapDispatchToProps = dispatch => ({
  onRequestWorksData: () => dispatch({ type: GET_WORKS_DATA })
});

class Works extends Component {
  componentDidMount() {
    const { onRequestWorksData } = this.props;
    onRequestWorksData();
  }

  render() {
    const { worksData } = this.props;

    return (
      <div className="card-inner" id="works-card">
        <div className="card-wrap">
          <div className="content works">
            <div className="title">Recent Works</div>
            {
              //   worksData && (
              //   <div className="filter-menu filter-button-group">
              //     <div className="f_btn active">
              //       <label htmlFor="fl_radio">
              //         <input type="radio" name="fl_radio" value="grid-item" />All
              //       </label>
              //     </div>
              //     <div className="f_btn">
              //       <label htmlFor="fl_radio">
              //         <input type="radio" name="fl_radio" value="industrial" />Industrial
              //       </label>
              //     </div>
              //     <div className="f_btn">
              //       <label htmlFor="fl_radio">
              //         <input type="radio" name="fl_radio" value="freelance" />Freelance
              //       </label>
              //     </div>
              //     <div className="f_btn">
              //       <label htmlFor="fl_radio">
              //         <input type="radio" name="fl_radio" value="personal" />Personal
              //       </label>
              //     </div>
              //   </div>
              // )
            }
            <div className="row grid-items border-line-v">
              {worksData &&
                worksData.map((work, index) => (
                  <WorkItem work={work} key={index} index={index} />
                ))}
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Works.propTypes = {
  worksData: PropTypes.array.isRequired,
  onRequestWorksData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Works);
