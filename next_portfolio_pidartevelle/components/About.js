/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import s from "../styles/About.module.css";

function About() {
  return (
    <div className={s.a}>
      <div className={s.a_left}>
        <div className={s.a_card}>
          <div className={s.a_card_bg}></div>
          <Image
            className={s.a_image}
            src="/crête1.jpg"
            alt="hooded hacker"
            height={400}
            width={300}
            layout="fixed"
          />
        </div>
      </div>
      <div className={s.a_right}>
        <h1 className={s.a_title}>A little about me</h1>
        <p className={s.a_sub}>
          Communication, people and stress management, responsabilities, each
          and every one of these skills obtained managing a restaurant will be
          so useful in this new career
        </p>
        <p className={s.a_desc}>
          After these five months learning code the full-stack way, it's quite
          obvious this new world and opportunities will require a never-ending
          learning approach. I'm quite excited to see how far I've already come
          as the journey is only beginning. I'd love the opportunity to apply
          those newly learned skills in whatever capacity required!
        </p>
        <div className={s.a_school}>
          <div className={s.a_school_image}>
            <Image
              src="/WCS.png"
              alt="WCS logo"
              height={100}
              width={100}
              layout="fixed"
            />
          </div>
          <div className={s.a_school_text}>
            <h4>Wild Code School Lyon</h4>
            <p className={s.a_school_title}>
              {" "}
              'Développeur Web et Web Mobile' (5months)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
