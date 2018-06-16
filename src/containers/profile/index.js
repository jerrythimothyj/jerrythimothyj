import React from 'react';

const Profile = () => <div className="card-started" id="home-card">

<div className="profile">

    <div className="slide" style={{ backgroundImage: `url(assets/images/bg.jpg)` }}></div>


    <div className="image">
        <img src="assets/images/profile.png" alt="" />
    </div>


    <div className="title">Jerry Thimothy J</div>
    <div className="subtitle">Consultant at Xebia | Web Developer | UI Developer | Javascript Developer | PHP Developer | Aquarist</div>


    <div className="social">
        <a target="_blank" href="https://dribbble.com/"><span className="fab fa-dribbble"></span></a>
        <a target="_blank" href="https://twitter.com/"><span className="fab fa-twitter"></span></a>
        <a target="_blank" href="https://github.com/"><span className="fab fa-github"></span></a>
        <a target="_blank" href="https://www.spotify.com/"><span className="fab fa-spotify"></span></a>
        <a target="_blank" href="https://stackoverflow.com/"><span className="fab fa-stack-overflow"></span></a>
    </div>


    <div className="lnks">
        <a href="#" className="lnk">
            <span className="text">Download CV</span>
            <span className="ion ion-archive"></span>
        </a>
        <a href="#" className="lnk discover">
            <span className="text">Contact Me</span>
            <span className="arrow"></span>
        </a>
    </div>

</div>

</div>

export default Profile;