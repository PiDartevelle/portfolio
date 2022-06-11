import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "../styles/Form.module.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "process.env.SERVICE_ID",
        "process.env.EMPLATE_ID",
        form.current,
        "process.env.PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={s.general_form}>
      <label>Enter your name:</label>
      <input type="text" name="user_name" required />
      <label>Add your mail:</label>
      <input type="email" name="user_email" required />
      <label>And a message!</label>
      <textarea name="message" />
      <input type="submit" value="Send" required />
    </form>
  );
};

export default ContactUs;
