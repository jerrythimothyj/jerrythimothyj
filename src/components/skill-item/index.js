import React from 'react';
import classNames from 'classnames';

const SkillItem = (props) =>
    <li className={classNames({"border-line-h": !props.isLast})}>
        <div className="name">{props.skill.name}</div>
        <div className="progress">
            <div className="percentage" style={{ width: props.skill.rating }}></div>
        </div>
    </li>

export default SkillItem;