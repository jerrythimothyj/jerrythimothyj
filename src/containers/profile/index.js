import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_PROFILE_DATA } from './actions';

const mapStateToProps = state => ({
  profileData: state.profile.profileData,
});

const mapDispatchToProps = dispatch => ({
  onRequestProfileData: () => dispatch({ type: GET_PROFILE_DATA }),
});

class Profile extends Component {
  componentDidMount() {
    const { onRequestProfileData } = this.props;
    onRequestProfileData();
  }

  render() {
    const { profileData } = this.props;

    return (
      <div className="card-started" id="home-card" >

        <div className="profile">

          <div className="slide" style={{ backgroundImage: 'url(assets/images/bg.jpg)' }} />


          <div className="image">
            <img src="assets/images/profile.png" alt="" />
          </div>

          {profileData &&
          <div>
            <div className="title">{profileData.name}</div>
            <div className="subtitle">{profileData.designation}</div>

            <div className="social">
              <a target="_blank" rel="noopener noreferrer" href={profileData.github}><span className="fab fa-github" /></a>
              <a target="_blank" rel="noopener noreferrer" href={profileData.linkedin}><span className="fab fa-linkedin" /></a>
              <a target="_blank" rel="noopener noreferrer" href={profileData.facebook}><span className="fab fa-facebook" /></a>
            </div>
          </div>
          }


          {profileData &&
          <div className="lnks">
            <a href={profileData.resume_link} target="_blank" rel="noopener noreferrer" className="lnk">
              <span className="text">Download CV</span>
              <span className="ion ion-archive" />
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="arrow" />
            </a>
          </div>
            }

        </div>

      </div >
    );
  }
}

Profile.propTypes = {
  profileData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    resume_link: PropTypes.string.isRequired,
  }).isRequired,
  onRequestProfileData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
