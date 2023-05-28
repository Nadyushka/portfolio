import React from "react";
import s from "./AboutMe.module.scss";
import photo from "../../../assets/pic/photo.jpg";
// @ts-ignore
import cv from "../../../assets/pic/cv_Baranova.pdf";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";

const AboutMe = () => {
    return (
        <section className={s.blockOne} id={"aboutMySelf"}>
            <Fade direction={"right"} delay={500} duration={1200}>
                <div className={s.blockOne_container}>
                    <div className={s.blockOne_left}>
                        <div className={s.blockOne_personalInfo}>
                            <h6>Hello, I am</h6>
                            <h1>Nadya Baranova</h1>
                            <h2>I am </h2>
                            <ReactTypingEffect
                                text={[
                                    "a passionate",
                                    "an enthusiastic",
                                    "an energetic",
                                    "an excited",
                                    "a lively",
                                    "a peppy",
                                    "a high-spirited",
                                    "a positive"
                                ]}
                                speed={100}
                                eraseSpeed={100}
                                eraseDelay={1000}
                                typingDelay={1000}
                            />
                            <h2>Frontend Developer</h2>
                            <div>
                                My aim is to improve the world by means of using my skills the
                                best way
                            </div>
                        </div>
                        <button><a href={cv} download={true} className={s.blockOne_cvLink}>Download CV</a></button>
                    </div>
                    <div className={s.blockOne_right}>
                        <div className={s.blockOne_button}>
                            <img className={s.blockOne_photo} alt={"my photo"} src={photo}/>
                        </div>
                        <div className={s.blockOne_buttonBackground}></div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default AboutMe;
