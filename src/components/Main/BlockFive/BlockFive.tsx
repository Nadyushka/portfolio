import React from "react";
import s from "./BlockFive.module.scss";
import BlockTitle from "../../commonComponents/BlockTitle";
import { Fade } from "react-awesome-reveal";

const BlockFive = () => {
  return (
    <section className={s.blockFive}>
      <Fade direction={"right"}>
        <div className={s.blockFive_container}>
          <BlockTitle title={"GET IN TOUCH."} />
          <div className={s.blockFive_sides}>
            <div className={s.blockFive_left}>
              <h4>What’s your story? Get in touch</h4>
              <p>
                Always available for cooperation if the right project comes
                along. Feel free to contact me.
              </p>
            </div>
            <div className={s.blockFive_right}>
              <form className={s.blockFive_contactArea}>
                <h4>Say something</h4>
                <input
                  className={s.input_name}
                  placeholder={"Name"}
                  type={"text"}
                />
                <input
                  className={s.input_email}
                  placeholder={"Email"}
                  type={"email"}
                />
                <input
                  className={s.input_message}
                  placeholder={"Your message"}
                />
                <button type={"submit"} className={s.blockFive_button}>
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default BlockFive;
