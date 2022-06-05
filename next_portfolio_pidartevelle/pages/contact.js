import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import s from "../styles/Contact.module.css";
import Link from "next/link";

function contact() {
  return (
    <Layout pageTitle="Contact">
      <h1>This is the part where we can keep in touch</h1>
      <Link href="/" className={s.c_backHome}>
        Home
      </Link>
      <div className={s.c}>
        <div className={s.c_bg}></div>
        <div className={s.c_wrapper}>
          <div className={s.c_left}>
            <h1 className={s.c_title}>How about we meet ?</h1>
            <div className={s.c_info}>
              <div className={s.c_info_item}>
                <Image
                  src="/at.png"
                  alt="looks like a @"
                  height={30}
                  width={30}
                  layout="fixed"
                  className={s.c_icon}
                />
                <p className={s.c_icon_text_1}> pro.dartevelle@gmail.com</p>
              </div>
              <div className={s.c_info_item}>
                <Image
                  src="/github.png"
                  alt="looks like a gitHub"
                  height={30}
                  width={30}
                  layout="fixed"
                  className={s.c_icon}
                />
                <p className={s.c_icon_text_2}>
                  <Link href="https://github.com/PiDartevelle" target="_blank">
                    https://github.com/PiDartevelle
                  </Link>
                </p>
              </div>
              <div className={s.c_info_item}>
                <Image
                  src="/linkedin.png"
                  alt="looks like a linkedin"
                  height={30}
                  width={30}
                  layout="fixed"
                  className={s.c_icon}
                />
                <p className={s.c_icon_text_3}>
                  <Link
                    href="https://www.linkedin.com/in/pierre-dartevelle-6550a9235/
"
                    target="_blank"
                  >
                    https://www.linkedin.com/in/pierre-dartevelle-6550a9235/
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className={s.c_right}></div>
        </div>
      </div>
    </Layout>
  );
}

export default contact;
