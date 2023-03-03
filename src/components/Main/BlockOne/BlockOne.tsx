import React from 'react';
import s from './BlockOne.module.scss'
import photo from '../../../assets/pic/photo.jpg'

const BlockOne = () => {
    return (
        <section className={s.blockOne}>
            <div className={s.blockOne_container}>
                <div className={s.blockOne_left}>
                    <div className={s.blockOne_personalInfo}>
                        <h6>Hello, I am</h6>
                        <h1>Nadya Baranova</h1>
                        <h2>I am a passionate Frontend Developer</h2>
                        <div>My aim is to improve the world by means of using my skills the best way</div>
                    </div>
                    <button>Download CV</button>
                </div>
                <div className={s.blockOne_right}>
                    <div className={s.blockOne_button}>
                        <img className={s.blockOne_photo} alt={'my photo'} src={photo}/>
                    </div>
                    <div className={s.blockOne_buttonBackground}></div>
                </div>
            </div>
        </section>
    );
};

export default BlockOne;