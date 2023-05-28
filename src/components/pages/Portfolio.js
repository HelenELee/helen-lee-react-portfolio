import React from 'react';
import Project from "../Project";
import  {projectData} from '../data/project-data';
//use project component to display each project
export default function Portfolio() {
  return (
    <main className="w-3/4 pt-5 m-auto text-center">

    <span className="text-center about-me text-xl highlight text-4xl">Below is a selection of my projects. Please check out my <a href="https://github.com/HelenELee" className="hover:curser-grabbing hover:underline">GitHub</a> account to see more....</span>
    <section className="w-3/4 m-auto flex flex-row justify-center flex-wrap">
      
      
      {
        projectData.map((proj) => {
          console.log(proj.title);
          return <Project key={proj.id} id={proj.id} title={proj.title} img={proj.img} app={proj.app} github={proj.github} desc={proj.desc}/>
        })
      }
      
    </section>
    </main>
    
  );
}
