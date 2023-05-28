import React from "react";
import s from "./EducationAndSkills.module.scss";
import Skill from "./Skill/Skill";
import BlockTitle from "../../commonComponents/BlockTitle/BlockTitle";
import Education from "./Educations/Education";
import {Fade} from "react-awesome-reveal";

const EducationAndSkills = () => {
    return (
        <section className={s.blockTwo} id={"mySkills"}>
            <Fade direction={"right"} delay={500} duration={1200}>
                <div className={s.blockTwo_container}>
                    <BlockTitle title={"EDUCATION & SKILLS"}/>
                    <div className={s.blockTwo_info}>
                        <div className={s.blockTwo_educations}>
                            <Education
                                year={"November - April 2023"}
                                place={"IT-INCUBATOR"}
                                subject={"REACT course"}
                            />
                            <Education
                                year={"June - October 2022"}
                                place={"rs-school"}
                                subject={"Frontend  course"}
                            />
                            <Education
                                year={"January - May 2022"}
                                place={"YouTube"}
                                subject={"HTML,CSS,JavaScript"}
                            />
                        </div>
                        <div className={s.blockTwo_skills}>
                            <h4>My skills</h4>
                            <p>
                                I am a Front-end Developer. I code and create web elements for
                                amazing people around the world. I like to work with new people.
                                New people - new Experiences.{" "}
                            </p>
                            <div>
                                <Skill name={"REACT / REDAX/  REDUX-TOOLKIT"}/>
                                <Skill name={"AXIOS / REST API"}/>
                                <Skill name={"JAVA SCRIPT/ TYPE SCRIPT"}/>
                                <Skill name={"UNIT TEST/ STORYBOOK"}/>
                                <Skill name={"MATERIAL UI/ MANTINE"}/>
                                <Skill name={"FORMIK"}/>
                                <Skill name={"HTML/CSS"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default EducationAndSkills;
