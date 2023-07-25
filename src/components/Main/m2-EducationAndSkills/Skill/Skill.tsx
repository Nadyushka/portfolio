import React from 'react';
import s from './Skill.module.scss'

type propsType = {
    name: string
}

const Skill = (props: propsType) => {

    return (
        <article className={s.skill}>
            <h3>{props.name}</h3>
        </article>
    );
};

export default Skill;