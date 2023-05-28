import React, {FormEvent, useState} from "react";
import s from "./ContactMe.module.scss";
import BlockTitle from "../../commonComponents/BlockTitle/BlockTitle";
import {Fade} from "react-awesome-reveal";
import emailjs from 'emailjs-com'
import {Error} from "../../commonComponents/Error/Error";
import {Loader} from "../../commonComponents/Loader/Loader";


const ContactMe = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [messageInfo, setMessageInfo] = useState<string>('')

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
    };

    const sendEmailHandler = (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault()
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID!,
            process.env.REACT_APP_TEMPLATE_ID!,
            templateParams,
            process.env.REACT_APP_USER_ID!)
            .then(res => {
                setMessageInfo('You message was successfully sent')
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch(e => {
                setMessageInfo('Error occurred. Send you message again')
            })
            .finally(()=> setIsLoading(false))
    }


    return (
        <section className={s.blockFive} id={"contactMe"}>
            {isLoading && <Loader/>}
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
                            <form className={s.blockFive_contactArea} onSubmit={sendEmailHandler}>
                                <h4>Say something</h4>
                                <input
                                    className={s.input_name}
                                    placeholder={"Name"}
                                    type={"text"}
                                    value={name}
                                    onChange={(e) => setName(e.currentTarget.value)}
                                    required={true}
                                />
                                <input
                                    className={s.input_email}
                                    placeholder={"Email"}
                                    type={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                    required={true}
                                />
                                <textarea
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
                <Error errorMessage={messageInfo} clearMessageInfo={setMessageInfo}/>
            </Fade>
        </section>
    );
};

export default ContactMe;
