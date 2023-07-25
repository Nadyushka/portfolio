import React from 'react';
import s from './Education.module.scss'

type propsType = {
    year: string
    place: string
    subject: string
}

const Education = (props:propsType) => {
    return (
        <div className={s.education}>
            <span>{props.year}</span>
            <h6>{props.subject}</h6>
            <p>{props.place}</p>
        </div>
    );
};

export default Education;