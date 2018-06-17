import React, { Component } from 'react';
import { connect } from "react-redux";
import { GET_PROFILE_DATA } from './actions';


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

                    <div className="slide" style={{ backgroundImage: `url(assets/images/bg.jpg)` }}></div>


                    <div className="image">
                        <img src="assets/images/profile.png" alt="" />
                    </div>

                    {profileData && <div>
                            <div className="title">{profileData.name}</div>
                            <div className="subtitle">{profileData.designation}</div>

                            <div className="social">
                                <a target="_blank" href={profileData.github}><span className="fab fa-github"></span></a>
                                <a target="_blank" href={profileData.linkedin}><span className="fab fa-linkedin"></span></a>
                                <a target="_blank" href={profileData.facebook}><span className="fab fa-facebook"></span></a>
                            </div>
                    </div>}


                    {profileData && <div className="lnks">
                        <a href={profileData.resume_link} target="_blank" className="lnk">
                            <span className="text">Download CV</span>
                            <span className="ion ion-archive"></span>
                        </a>
                        <a href="#" className="lnk discover">
                            <span className="text">Contact Me</span>
                            <span className="arrow"></span>
                        </a>
                    </div>
                    }

                </div>

            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        profileData: state.profile.profileData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestProfileData: () => dispatch({ type: GET_PROFILE_DATA })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);