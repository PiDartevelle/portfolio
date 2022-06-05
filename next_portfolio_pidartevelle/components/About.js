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
            height={500}
            width={400}
            layout="fixed"
          />
        </div>
      </div>
      <div className={s.a_right}>
        <h1 className={s.a_title}>Random but sexy title</h1>
        <p className={s.a_sub}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          repudiandae necessitatibus corporis voluptas, provident facere
          accusantium a, illum impedit et at quaerat veritatis temporibus ex
          minima sit sint, soluta perferendis.
        </p>
        <p className={s.a_desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, iusto
          numquam? Ipsam vero quaerat unde doloribus architecto dolor veniam.
          Eveniet deleniti corrupti aperiam autem eius assumenda pariatur eos
          reiciendis magni, asperiores nemo doloremque totam laudantium
          architecto adipisci officiis fuga eligendi, neque temporibus possimus
          omnis cum animi quas? Voluptate, quaerat odio cumque ut veniam
          voluptatibus quidem officiis quasi, repudiandae aut, ipsam quae
          cupiditate libero vel sapiente. Eos soluta atque eum, vitae, esse quis
          a maiores neque velit doloribus natus vel unde veritatis excepturi
          magni quae pariatur possimus doloremque. Error veritatis ipsa nisi
          accusamus vel beatae harum laborum. Voluptates suscipit tempora
          tenetur?
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
            <p className="cursus"> Développeur Web et Web Mobile (5mois)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
