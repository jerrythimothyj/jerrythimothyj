import React from 'react';
import classNames from 'classnames';

const EducationItem = (props) => <div className={classNames("resume-item", {"border-line-h": !props.isLast})}>
    <div className="date">{props.education.year}</div>
    <div className="name">{props.education.course}</div>
    <div className="company">{props.education.institute}</div>
</div>

export default EducationItem;