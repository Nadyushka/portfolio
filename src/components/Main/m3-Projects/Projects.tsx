import React from "react";
import s from "./Projects.module.scss";
import Project from "./Project/Project";
import BlockTitle from "../../commonComponents/BlockTitle";
import toDoPhoto from "../../../assets/pic/to-do-list-apps.png";
import SocialPhoto from "../../../assets/pic/social-network-app.png";
import JobSearchAppPhoto from "../../../assets/pic/jobSearchApp.png";
import EnglishCards from "../../../assets/pic/englicsCards.jpg";
import {Fade} from "react-awesome-reveal";

const Projects = () => {
    return (
        <section className={s.blockThree} id={"myProjects"}>
            <Fade direction={"right"} delay={500} duration={1200}>
                <div className={s.blockThree_container}>
                    <BlockTitle title={"My projects"}/>
                    <div className={s.blockThree_projects}>
                        <Project
                            title={"ToDoList"}
                            description={
                                "ToDoList was created with the help of REACT on TS. It is a useful application to manage time. "
                            }
                            image={toDoPhoto}
                            link={'https://nadyushka.github.io/todoList/'}
                        />
                        <Project
                            title={"Social Network"}
                            description={
                                "Social Network is a great example of how can be arranged the application with a big amount of data."
                            }
                            image={SocialPhoto}
                            link={'https://nadyushka.github.io/samurai-way-main/'}
                        />
                        <Project
                            title={"English cards"}
                            description={
                                "English cards is a helpful app that helps each person to improve English"
                            }
                            image={EnglishCards}
                            link={'https://nadyushka.github.io/English-cards/'}
                        />
                        <Project
                            title={"Job search application"}
                            description={
                                "Job search application is a test project made with help Mantine and Redux-Toolkit"
                            }
                            image={JobSearchAppPhoto}
                            link={'https://nadyushka.github.io/rtkJobSearchProject/'}
                        />
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Projects;
