import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Form from "../components/Form";
import s from "../styles/contactPage.module.css";
import Link from "next/link";

function contact() {
  return (
    <Layout pageTitle="Contact">
      <div className={s.contact_wrapper}>
        <div className={s.left}>
          <h2>
            {" "}
            You can alway go back{" "}
            <Link href="/" className={s.c_backHome}>
              <span className={s.span}>Home</span>
            </Link>
          </h2>
          <Contact />
        </div>
        <div className={s.right}>
          <Form />
        </div>
      </div>
    </Layout>
  );
}

export default contact;
