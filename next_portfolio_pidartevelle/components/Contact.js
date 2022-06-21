import Image from "next/image";
import Link from "next/link";
import s from "../styles/Contact.module.css";

function Contact() {
  return (
    <>
      <div className={s.c}>
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
                  {" "}
                  <Link href={"https://github.com/PiDartevelle"}>
                    <a className={s.link} target={"_blank"}>
                      {" "}
                      https://github.com/PiDartevelle
                    </a>
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
                  {" "}
                  <Link
                    href={
                      "https://www.linkedin.com/in/pierre-dartevelle-6550a9235/"
                    }
                  >
                    <a className={s.link} target={"_blank"}>
                      https://www.linkedin.com/in/pierre-dartevelle-6550a9235/
                    </a>
                  </Link>
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
