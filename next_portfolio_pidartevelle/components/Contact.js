import Image from "next/image";
import s from "../styles/Contact.module.css";

function Contact() {
  return (
    <>
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
                <p className={s.c_icon_text}> pro.dartevelle@gmail.com</p>
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
                <p className={s.c_icon_text}>
                  {" "}
                  https://github.com/PiDartevelle
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
                <p className={s.c_icon_text}>
                  {" "}
                  https://www.linkedin.com/in/pierre-dartevelle-6550a9235/
                </p>
              </div>
            </div>
          </div>
          <div className={s.c_right}></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
