import React from 'react';
import Project from "../Project";
import  {projectData} from '../data/project-data';

export default function Portfolio() {
  return (
    
    <main className="w-3/4 pt-20 m-auto flex flex-row justify-center flex-wrap">
      {
        projectData.map((proj) => {
          console.log(proj.title);
          return <Project id={proj.id} title={proj.title} img={proj.img} app={proj.app} github={proj.github} desc={proj.desc}/>
        })
      }
      
    </main>
    
  );
}
