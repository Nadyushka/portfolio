import React from 'react';
import s from './Main.module.scss'
import AboutMe from "./m1-AboutMe/AboutMe";
import EducationAndSkills from "./m2-EducationAndSkills/EducationAndSkills";
import Projects from "./m3-Projects/Projects";
import OfferJob from "./m4-OfferJob/OfferJob";
import ContactMe from "./m5-ContactMe/ContactMe";

const Main = () => {
    return (
        <main className={s.main}>
            <AboutMe/>
            <EducationAndSkills/>
            <Projects/>
            <OfferJob/>
            <ContactMe/>
        </main>
    );
};

export default Main;