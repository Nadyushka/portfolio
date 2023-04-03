import React from "react";
import s from "./BlockThree.module.scss";
import Project from "./Project/Project";
import BlockTitle from "../../commonComponents/BlockTitle";
import toDoPhoto from "../../../assets/pic/to-do-list-apps.png";
import SocialPhoto from "../../../assets/pic/social-network-app.png";
import { Fade } from "react-awesome-reveal";

const BlockThree = () => {
  return (
    <section className={s.blockThree} id={"myProjects"}>
      <Fade direction={"right"} delay={500} duration={1200}>
        <div className={s.blockThree_container}>
          <BlockTitle title={"My projects"} />
          <div className={s.blockThree_projects}>
            <Project
              title={"ToDoList"}
              description={
                "ToDoList was created with the help of REACT on TS. It is a useful application to manage time. "
              }
              image={toDoPhoto}
            />
            <Project
              title={"Social Network"}
              description={
                "Social Network is a great example of how can be arranged the application with a big amount of data."
              }
              image={SocialPhoto}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default BlockThree;
