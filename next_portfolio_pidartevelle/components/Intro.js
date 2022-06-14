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
              <div className={style.i_title_item}>Junior Web developper</div>
              <div className={style.i_title_item}>React/Next/Javascript</div>
              <div className={style.i_title_item}>NodeJS/Express/mySQL</div>
            </div>
          </div>
          <div className={style.i_description}>
            After ten years waitering tables and managing restaurants, I've
            decided to allow myself a new start, and started learning code. And
            I can't stop! It really stuck, so instead of learning alone and by
            myself, I started a 5 months long bootcamp to get things to the next
            level. I'm now looking for the opportunity to go even further in a
            company that would give me the chance to keep on improving.
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
