
import React from 'react';
//Project component displays image, description, links to app and github

export default function Project(props) {
    //const hasLink = (props.app === "" ? false : true);
   

    return (
        // <section className="max-w-sm bg-white border border-yellow-200 rounded-lg shadow  m-5 hover:shadow-[0_35px_60px_-15px_rgba(51,53,51,1.0)] hover:shadow-inner">            
        <section className="max-w-sm bg-white border border-yellow-200 rounded-lg m-5 hover:shadow-orange hover:shadow-inner">             
            <a href="{props.app}">
                <img src={props.img} alt={props.title + " home page image"} className="rounded-t-lg m-auto mt-5" />           
            </a>
            <div className="p-5">
                <a href={props.app}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{props.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
                <a href={props.app} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-stone-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 ">
                    Open Application
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
                
                <a href={props.github} className="inline-flex items-center text-blue-600 hover:underline mt-5 text-center">
                Link to Github Repository
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </a>
            </div>
        </section>
    
  );
}




