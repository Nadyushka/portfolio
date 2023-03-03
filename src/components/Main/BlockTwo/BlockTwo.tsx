import React from 'react';
import s from './BlockTwo.module.scss'
import Skill from "./Skill/Skill";
import BlockTitle from "../../commonComponents/BlockTitle";
import Education from "./Educations/Education";

const BlockTwo = () => {
    return (
        <section className={s.blockTwo}>
            <div className={s.blockTwo_container}>
                <BlockTitle title={'EDUCATION & SKILLS'}/>
                <div className={s.blockTwo_info}>
                    <div className={s.blockTwo_educations}>
                        <Education year={'November - April 2023'} place={'IT-INCUBATOR'} subject={'REACT course'}/>
                        <Education year={'June - October 2022'} place={'rs-school'} subject={'Frontend  course'}/>
                        <Education year={'January - May 2022'} place={'YouTube'} subject={'HTML,CSS,JavaScript'}/>
                    </div>
                    <div className={s.blockTwo_skills}>
                        <h4>My skills</h4>
                        <p>I am a a  Front-end Developer. I code and create
                            web elements for amazing people around the world. I like work with new people. New people
                            new Experiences. </p>
                        <div>
                            <Skill name={'REACT/REDAX/TS'} percentage={77}/>
                            <Skill name={'Thunk/React-Router-Dom'} percentage={88}/>
                            <Skill name={'ReatAPI'} percentage={82}/>
                            <Skill name={'axios/formik '} percentage={83}/>
                            <Skill name={'HTML/CSS/JS'} percentage={85}/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlockTwo;