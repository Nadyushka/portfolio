import React from 'react';
import s from './Project.module.scss'

type PropsType = {
    title: string
    description: string
    image: string
}

const Project = (props: PropsType) => {

    return (
        <article className={s.project}>
            <div className={s.project_image} style={{backgroundImage: `url(${props.image})`}}>
                <button>Watch more</button>
                <div className={s.project_imageLayout}></div>
            </div>
            <div className={s.project_info}>
                <h4>{props.title}</h4>
                <div className={s.project_description}>{props.description}</div>
            </div>
        </article>
    );
};

export default Project;