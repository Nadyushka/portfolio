import React, {FormEvent, useRef, useState} from "react";
import s from "./ContactMe.module.scss";
import BlockTitle from "../../commonComponents/BlockTitle";
import {Fade} from "react-awesome-reveal";
import emailjs from 'emailjs-com'

const ContactMe = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const form = useRef<any>()

    const sendEmailHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID!,
            process.env.REACT_APP_TEMPLATE_ID!,
            form.current,
            process.env.REACT_APP_USER_ID!)
            .then(res => {
                e.currentTarget.reset()
                console.log(res)
            })
            .catch(e => console.log(e.message))
    }

    return (
        <section className={s.blockFive} id={"contactMe"}>
            <Fade direction={"right"} delay={500} duration={1200}>
                <div className={s.blockFive_container}>
                    <BlockTitle title={"GET IN TOUCH."}/>
                    <div className={s.blockFive_sides}>
                        <div className={s.blockFive_left}>
                            <h4>What’s your story? Get in touch</h4>
                            <p>
                                Always available for cooperation if the right project comes
                                along. Feel free to contact me.
                            </p>
                        </div>
                        <div className={s.blockFive_right}>
                            <form ref={form} className={s.blockFive_contactArea} onSubmit={sendEmailHandler}>
                                <h4>Say something</h4>
                                <input
                                    name={'user_name'}
                                    className={s.input_name}
                                    placeholder={"Name"}
                                    type={"text"}
                                    value={name}
                                    onChange={(e) => setName(e.currentTarget.value)}
                                    required={true}
                                />
                                <input
                                    name={'user_email'}
                                    className={s.input_email}
                                    placeholder={"Email"}
                                    type={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                    required={true}
                                />
                                <textarea
                                    name={'message'}
                                    className={s.input_message}
                                    placeholder={"Your message"}
                                    value={message}
                                    onChange={(e) => setMessage(e.currentTarget.value)}
                                    required={true}
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

export default ContactMe;
