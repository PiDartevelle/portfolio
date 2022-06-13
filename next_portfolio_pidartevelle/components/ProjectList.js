/* eslint-disable react/no-unescaped-entities */
import s from "../styles/ProjectList.module.css";
import Project from "./Project";
import { projects } from "../public/data";
import { Router } from "next/router";

function ProjectList() {
  return (
    <div className={s.pl}>
      <div className={s.pl_texts}>
        <h1 className={s.pl_title}>What I've had my hands on so far</h1>
        <p className={s.pl_desc}>
          {" "}
          All these projects, at the expection of this very portfolio, were made
          within the 5 months learning Code at the Wild Code School.
        </p>
      </div>
      <div className={s.pl_list}>
        {projects.map((pro) => (
          <Project
            key={pro.id}
            img={pro.img}
            link={pro.link}
            title={pro.title}
            desc={pro.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
