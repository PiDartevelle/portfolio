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
          (Disclaimer : All these projects, alongside this very portfolio, were
          made as part of our formation during the 5 months learning Code at the
          Wild Code School. It still amazes me to see what you can achieve when
          you put your mind and energy to it! Don't hesitate to click and have a
          look. Also bear in mind these were made after a few weeks of learning
          only :-)
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
