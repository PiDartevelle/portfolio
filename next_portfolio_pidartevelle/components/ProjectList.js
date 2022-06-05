/* eslint-disable react/no-unescaped-entities */
import s from "../styles/ProjectList.module.css";
import Project from "./Project";
import { projects } from "../public/data";

function ProjectList() {
  return (
    <div className={s.pl}>
      <div className={s.pl_texts}>
        <h1 className={s.pl_title}>What I've had my hands on so far</h1>
        <p className={s.pl_desc}>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, cumque
          voluptatibus accusantium odit quo illum error libero ipsum qui
          voluptates. Eveniet consequatur eos voluptatibus deleniti alias? Eius
          doloremque illum officia!
        </p>
      </div>
      <div className={s.pl_list}>
        {projects.map((pro) => (
          <Project
            key={pro.id}
            img={pro.img}
            link={pro.link}
            title={pro.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
