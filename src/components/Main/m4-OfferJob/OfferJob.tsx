import React from "react";
import s from "./OfferJob.module.scss";
import { Fade } from "react-awesome-reveal";

const OfferJob = () => {
  return (
    <section className={s.blockFour}>
      <div className={s.blockFour_container}>
        <Fade direction={"right"} delay={500} duration={1200}>
          <h2>I am avaliable for a remote position</h2>
          <button className={s.blockFour_button}>Press to make an offer</button>
        </Fade>
      </div>
    </section>
  );
};

export default OfferJob;
