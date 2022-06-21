import Image from "next/image";
import Link from "next/link";
import s from "../styles/Project.module.css";

function Project({ img, link, title, desc }) {
  return (
    <div className={s.p}>
      <div className={s.p_browser}>
        <div className={s.p_circles}>
          <div className={s.p_circle}></div>
          <div className={s.p_circle}></div>
          <div className={s.p_circle}></div>
        </div>
      </div>

      <Link href={link}>
        <a target={"_blank"}>
          <Image
            src={img}
            alt="project"
            height={1100}
            width={500}
            className={s.p_img}
          />
        </a>
      </Link>
    </div>
  );
}

export default Project;
