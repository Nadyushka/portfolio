import React from "react";
import s from "./BlockFour.module.scss";
import { Fade } from "react-awesome-reveal";

const BlockFour = () => {
  return (
    <section className={s.blockFour}>
      <Fade>
        <div className={s.blockFour_container}>
          <h2>I am avaliable for a remote position</h2>
          <button className={s.blockFour_button}>Press to make an offer</button>
        </div>
      </Fade>
    </section>
  );
};

export default BlockFour;
