import Image from "next/image";
import Link from "next/link";
import s from "../styles/Project.module.css";

function Project({ img, link, title }) {
  return (
    <div className={s.p}>
      <div className={s.p_browser}>
        <div className={s.p_circles}>
          <div className={s.p_circle}></div>
          <div className={s.p_circle}></div>
          <div className={s.p_circle}></div>
        </div>

        <p className={s.p_project_title}>{title}</p>
      </div>
      <Link href={link} target="_blank">
        <Image
          src={img}
          alt="project"
          height={1100}
          width={500}
          className={s.p_img}
        />
      </Link>
    </div>
  );
}

export default Project;
