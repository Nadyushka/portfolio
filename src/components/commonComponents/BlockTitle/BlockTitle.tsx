import React from 'react';
import s from './BlockTitle.module.css'

type propsType = {
    title: string
}

const BlockTitle = (props: propsType) => {
    return (
        <>
            <h3 className={s.blockTitle}>
                {props.title}
            </h3>
            <div className={s.blockLine}></div>
        </>
    );
};

export default BlockTitle;