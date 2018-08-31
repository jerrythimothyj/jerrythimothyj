/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_RESUME_DATA } from './actions';
import { ExperienceItem, EducationItem, SkillItem } from '../../components';

const mapStateToProps = state => ({
  resumeData: state.resume.resumeData
});

const mapDispatchToProps = dispatch => ({
  onRequestResumeData: () => dispatch({ type: GET_RESUME_DATA })
});

class Resume extends Component {
  componentDidMount() {
    const { onRequestResumeData } = this.props;
    onRequestResumeData();
  }

  render() {
    const { resumeData } = this.props;

    return (
      <div className="card-inner" id="resume-card">
        <div className="card-wrap">
          <div className="content resume">
            <div className="title">Resume</div>

            <div className="row">
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="resume-title border-line-h">
                  <div className="icon">
                    <i className="ion ion-briefcase" />
                  </div>
                  <div className="name">Experience</div>
                </div>
                <div className="resume-items">
                  {resumeData &&
                    resumeData.experiences.map((experience, index) => (
                      <ExperienceItem
                        experience={experience}
                        index={index}
                        isFirst={index === 0}
                        isLast={index === resumeData.experiences.length - 1}
                        key={index}
                      />
                    ))}
                </div>
              </div>

              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="resume-title border-line-h">
                  <div className="icon">
                    <i className="ion ion-university" />
                  </div>
                  <div className="name">Education</div>
                </div>
                <div className="resume-items">
                  {resumeData &&
                    resumeData.educations.map((education, index) => (
                      <EducationItem
                        education={education}
                        index={index}
                        isLast={index === resumeData.educations.length - 1}
                        key={index}
                      />
                    ))}
                </div>
              </div>

              <div className="clear" />
            </div>
          </div>

          <div className="content skills">
            <div className="title">My Skills</div>

            <div className="row">
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="skills-list">
                  <div className="skill-title border-line-h">
                    <div className="icon">
                      <i className="ion ion-easel" />
                    </div>
                    <div className="name">Primary</div>
                  </div>
                  <ul>
                    {resumeData &&
                      resumeData.skills &&
                      resumeData.skills.primary.map((skill, index) => (
                        <SkillItem
                          skill={skill}
                          index={index}
                          isLast={
                            index === resumeData.skills.primary.length - 1
                          }
                          key={index}
                        />
                      ))}
                  </ul>
                </div>
              </div>

              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="skills-list">
                  <div className="skill-title border-line-h">
                    <div className="icon">
                      <i className="ion ion-code" />
                    </div>
                    <div className="name">Secondary</div>
                  </div>
                  <ul>
                    {resumeData &&
                      resumeData.skills &&
                      resumeData.skills.secondary.map((skill, index) => (
                        <SkillItem
                          skill={skill}
                          index={index}
                          isLast={
                            index === resumeData.skills.secondary.length - 1
                          }
                          key={index}
                        />
                      ))}
                  </ul>
                </div>
              </div>

              <div className="clear" />
            </div>

            <div className="row">
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="skills-list">
                  <div className="skill-title border-line-h">
                    <div className="icon">
                      <i className="ion ion-easel" />
                    </div>
                    <div className="name">Databases</div>
                  </div>
                  <ul>
                    {resumeData &&
                      resumeData.skills &&
                      resumeData.skills.databases.map((skill, index) => (
                        <SkillItem
                          skill={skill}
                          index={index}
                          isLast={
                            index === resumeData.skills.databases.length - 1
                          }
                          key={index}
                        />
                      ))}
                  </ul>
                </div>
              </div>

              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="skills-list">
                  <div className="skill-title border-line-h">
                    <div className="icon">
                      <i className="ion ion-code" />
                    </div>
                    <div className="name">Tools</div>
                  </div>
                  <ul>
                    {resumeData &&
                      resumeData.skills &&
                      resumeData.skills.tools.map((skill, index) => (
                        <SkillItem
                          skill={skill}
                          index={index}
                          isLast={index === resumeData.skills.tools.length - 1}
                          key={index}
                        />
                      ))}
                  </ul>
                </div>
              </div>

              <div className="clear" />
            </div>

            <div className="row">
              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="skills-list">
                  <div className="skill-title border-line-h">
                    <div className="icon">
                      <i className="ion ion-easel" />
                    </div>
                    <div className="name">Multimedia</div>
                  </div>
                  <ul>
                    {resumeData &&
                      resumeData.skills &&
                      resumeData.skills.multimedia.map((skill, index) => (
                        <SkillItem
                          skill={skill}
                          index={index}
                          isLast={
                            index === resumeData.skills.multimedia.length - 1
                          }
                          key={index}
                        />
                      ))}
                  </ul>
                </div>
              </div>

              <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                <div className="skills-list">
                  <div className="skill-title border-line-h">
                    <div className="icon">
                      <i className="ion ion-code" />
                    </div>
                    <div className="name">Testing</div>
                  </div>
                  <ul>
                    {resumeData &&
                      resumeData.skills &&
                      resumeData.skills.testing.map((skill, index) => (
                        <SkillItem
                          skill={skill}
                          index={index}
                          isLast={
                            index === resumeData.skills.testing.length - 1
                          }
                          key={index}
                        />
                      ))}
                  </ul>
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

Resume.propTypes = {
  resumeData: PropTypes.shape({
    educations: PropTypes.array.isRequired,
    experiences: PropTypes.array.isRequired,
    skills: PropTypes.shape({
      primary: PropTypes.array.isRequired,
      secondary: PropTypes.array.isRequired,
      databases: PropTypes.array.isRequired,
      tools: PropTypes.array.isRequired,
      multimedia: PropTypes.array.isRequired,
      testing: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  onRequestResumeData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume);
