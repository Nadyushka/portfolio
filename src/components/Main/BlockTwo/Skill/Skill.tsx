import React from 'react';
import s from './Skill.module.scss'

type propsType = {
    name: string
    percentage: number
}

const Skill = (props: propsType) => {

    const onChangeHandler = () => {

    }

    return (
        <article className={s.skill}>
            <h3>{props.name}</h3>
            <input type={'range'} onChange={onChangeHandler} value={props.percentage}/>
        </article>
    );
};

export default Skill;