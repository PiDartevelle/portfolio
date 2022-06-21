import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "../styles/Form.module.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p61tpxp",
        "template_f8pkvx6",
        form.current,
        "vqMzJntTYiFtXD1Ns"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={s.general_form}>
      <label>Enter your name:</label>
      <input type="text" className={s.text_area} name="user_name" required />
      <label>Add your mail:</label>
      <input type="email" className={s.text_area} name="user_email" required />
      <label>And a message!</label>
      <textarea name="message" className={s.message_area} />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
