import React from 'react';

const Resume = () => <div className="card-inner" id="resume-card">
    <div className="card-wrap">

        <div className="content resume">

            <div className="title">Resume</div>

            <div className="row">

                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="resume-title border-line-h">
                        <div className="icon"><i className="ion ion-briefcase"></i></div>
                        <div className="name">Experience</div>
                    </div>
                    <div className="resume-items">
                        <div className="resume-item border-line-h active">
                            <div className="date">2013 - Present</div>
                            <div className="name">Art Director</div>
                            <div className="company">Facebook Inc.</div>
                            <p>
                                Collaborate with creative and development teams on the execution of ideas.
                    </p>
                        </div>
                        <div className="resume-item border-line-h">
                            <div className="date">2011 - 2012</div>
                            <div className="name">Front-end Developer</div>
                            <div className="company">Google Inc.</div>
                            <p>
                                Monitored technical aspects of the front-end delivery for several projects.
                    </p>
                        </div>
                        <div className="resume-item">
                            <div className="date">2009 - 2010</div>
                            <div className="name">Senior Developer</div>
                            <div className="company">Abc Inc.</div>
                            <p>
                                Optimize website performance using latest technology.
                    </p>
                        </div>
                    </div>
                </div>

                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="resume-title border-line-h">
                        <div className="icon"><i className="ion ion-university"></i></div>
                        <div className="name">Education</div>
                    </div>
                    <div className="resume-items">
                        <div className="resume-item border-line-h">
                            <div className="date">2006 - 2008</div>
                            <div className="name">Art University</div>
                            <div className="company">New York</div>
                            <p>
                                Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri
                    </p>
                        </div>
                        <div className="resume-item border-line-h">
                            <div className="date">2005 - 2006</div>
                            <div className="name">Programming Course</div>
                            <div className="company">Paris</div>
                            <p>
                                Coursework - Git, WordPress, Javascript, iOS, Android.
                    </p>
                        </div>
                        <div className="resume-item">
                            <div className="date">2004 - 2005</div>
                            <div className="name">Web Design Course</div>
                            <div className="company">London</div>
                            <p>
                                Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript
                    </p>
                        </div>
                    </div>
                </div>

                <div className="clear"></div>
            </div>

        </div>

        <div className="content skills">

            <div className="title">My Skills</div>

            <div className="row">

                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="skills-list">
                        <div className="skill-title border-line-h">
                            <div className="icon"><i className="ion ion-easel"></i></div>
                            <div className="name">Design</div>
                        </div>
                        <ul>
                            <li className="border-line-h">
                                <div className="name">Web Design</div>
                                <div className="progress">
                                    <div className="percentage" style={{ width: `90%` }}></div>
                                </div>
                            </li>
                            <li className="border-line-h">
                                <div className="name">Write Music</div>
                                <div className="progress">
                                    <div className="percentage" style={{ width: `65%` }}></div>
                                </div>
                            </li>
                            <li className="border-line-h">
                                <div className="name">Photoshop</div>
                                <div className="progress">
                                    <div className="percentage" style={{ width: `75%` }}></div>
                                </div>
                            </li>
                            <li>
                                <div className="name">Graphic Design</div>
                                <div className="progress">
                                    <div className="percentage" style={{ width: `85%` }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="skills-list">
                        <div className="skill-title border-line-h">
                            <div className="icon"><i className="ion ion-code"></i></div>
                            <div className="name">Coding</div>
                        </div>
                        <ul>
                            <li className="border-line-h">
                                <div className="name">WordPress</div>
                                <div className="progress">
                                    <div className="percentage" style={{ width: `85%` }}></div>
                                </div>
                            </li>
                            <li className="border-line-h">
                                <div className="name">PHP / MYSQL</div>
                                <div className="progress">
                                    <div className="percentage" style={{ width: `65%` }}></div>
                                </div>
                            </li>
                            <li className="border-line-h">
                                <div className="name">Angular / JavaScript</div>
                                <div className="progress">
                                    <div className="percentage" style={{ width: `75%` }}></div>
                                </div>
                            </li>
                            <li>
                                <div className="name">HTML / CSS</div>
                                <div className="progress">
                                    <div className="percentage" style={{ width: `90%` }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="clear"></div>
            </div>

        </div>

    </div>
</div>

export default Resume;