/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import style from "../styles/Projects.module.css";

function DisplayProjects() {
  return (
    <>
      <h2>A quick sum up of what I've had my hands on so far</h2>
      <div className={style.projects_WCS}>
        <div className={style.project_WCS}>
          <Image
            src="/TETRIS.png"
            alt="premier projet BAL"
            width={150}
            height={400}
            layout="fixed"
          />
          <p>
            {" "}
            A quick attempt to reproduce an old classic about two weeks after
            entering Wild Code School. Stacks used: html, CSS and Vanilla JS
          </p>
        </div>
        <div className={style.project_WCS}>
          <Image
            src="/BAL.png"
            alt="premier projet BAL"
            width={150}
            height={400}
            layout="fixed"
          />
          <p>
            For our second project, we decided to try and offer a solution for
            reader to keep up with the content of what us French call
            "BookBoxes". React.JS, APIs and a first glance at Back-end with
            Express and Node
          </p>
        </div>
        <div className={style.project_WCS}>
          <Image
            src="/QOTQOT.png"
            alt="premier projet BAL"
            width={150}
            height={400}
            layout="fixed"
          />
          <p>
            For a real client this time, we had to produce a B2B solution for
            restaurants to order and keep track local produces. Next.JS,
            AirTable, Homemade API for security purposes.
          </p>
        </div>
      </div>
    </>
  );
}

export default DisplayProjects;
