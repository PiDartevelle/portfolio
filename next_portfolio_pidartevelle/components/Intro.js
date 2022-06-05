/* eslint-disable react/no-unescaped-entities */
import style from "../styles/Intro.module.css";
import Image from "next/image";
import Link from "next/link";

function Intro() {
  return (
    <div className={style.i}>
      <div className={style.i_left}>
        <div className={style.i_left_wrapper}>
          <h2 className={style.i_intro}>Hello, my name is</h2>
          <h1 className={style.i_name}>Pierre Dartevelle</h1>
          <div className={style.i_title}>
            <div className={style.i_title_wrapper}>
              <div className={style.i_title_item}>Web developer</div>
              <div className={style.i_title_item}>UI/UX Designer</div>
              <div className={style.i_title_item}>Student</div>
            </div>
          </div>
          <div className={style.i_description}>
            I really should find some text to put around here to better explain
            who I am and what I do... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit amet enim sed illo, exercitationem
            id itaque quae, aliquid facere nulla magnam iusto excepturi? Totam
            consequatur optio aut, maiores pariatur corporis!
          </div>
          <p className={style.i_skip}>
            Know what you want? <br />
            Skip the site, head over to{" "}
            <Link href="/contact">
              <a className={style.i_surprise_chat}>contact</a>
            </Link>
          </p>
        </div>
      </div>
      <div className={style.i_right}>
        <div className={style.i_bg}></div>
        <Image
          className={style.i_image}
          alt="handsome young man"
          src="/mimiBnW.jpg"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Intro;
