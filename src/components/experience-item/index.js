import React from 'react';
import classNames from 'classnames';

const ExperienceItem = (props) => <div className={classNames("resume-item", {"border-line-h": !props.isLast}, {"active": props.isFirst})}>
    <div className="date">{props.experience.dateFrom} - {props.experience.dateTo}</div>
    <div className="name">{props.experience.designation}</div>
    <div className="company">{props.experience.organization}</div>
</div>

export default ExperienceItem;