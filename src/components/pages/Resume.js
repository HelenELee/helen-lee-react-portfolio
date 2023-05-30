import React from 'react';
import {resumeDataFE, resumeDataBE, resumeDataOther } from '../data/resume-data'
//link to full resume and skills
export default function Resume() {
  return (
    <main className="w-3/4 pt-10 m-auto flex flex-col justify-center">
      <div className="flex flex-col justify-center">
        <span className="text-center about-me highlight text-3xl">So these are some of the skills I learned. <br></br>Check out my <a href="https://github.com/HelenELee" className="hover:curser-grabbing hover:underline">GitHub</a> account to see how I have used them.</span>
        {/* <a href="https://drive.google.com/file/d/1VMWFiiijRbdrj_syCVhSilMFpDtUWZ_m/view?usp=share_link" className="inline-flex items-center text-blue-600 hover:underline mt-5 text-center">Link to Full Resume <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" target="_blank" rel="noopener noreferrer"></path></svg></a> */}
        {/* <a href="https://drive.google.com/file/d/1_UNrZPbut9Cb85W5WiQXGk-rpZep68Fl/view?usp=drive_link" className="inline-flex items-center text-red-600 hover:underline mt-5 text-center">Link to Full Resume <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" target="_blank" rel="noopener noreferrer"></path></svg></a> */}
        <span className="inline-flex items-center highlight m-auto"><a href="https://drive.google.com/file/d/1_UNrZPbut9Cb85W5WiQXGk-rpZep68Fl/view?usp=drive_link" className="inline-flex items-center hover:underline mt-5 text-center">Link to Full Resume <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" target="_blank" rel="noopener noreferrer"></path></svg></a></span>
      </div>
      
      <div className="flex flex-row justify-center sm:flex-col md:flex-row">
          <section className="p-10">
            <p className="block text-orange-600">Front End Proficiencies</p>
            <ul className="list-disc">
              {resumeDataFE.map((item, index) => (
                <li className="list-group-item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          
          <section className="p-10">
              <p className="block text-orange-600">Back End Proficiencies</p>
              <ul className="list-disc">
                {resumeDataBE.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
          </section>

          <section className="p-10">
              <p className="block text-orange-600">And more....</p>
              <ul className="list-disc">
                {resumeDataOther.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
          </section>
      </div>
      
    </main>
  );
}
