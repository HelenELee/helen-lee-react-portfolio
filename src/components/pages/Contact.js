import React from 'react';

export default function Contact() {
  return (
    // <main className="m-auto flex flex-row main-container items-center">
     
      <section className="w-2/4 pt-20 pl-20 m-auto pb-5">
          <h1 className="about-me mb-5 text-center text-4xl highlight">Want to contact me?</h1>
          <p className="about-me mb-5 text-center"> Have you any comments or feedback on my portfolio? </p>
         
          <p className="about-me mb-5 text-center">Do you have an opportunity you would like to discuss? </p>
          
          <p className="about-me mb-5 text-center"> I would love to hear from you!</p>
          <p className="about-me mb-5 text-center"> You can contact me on <a href="https://www.linkedin.com/in/helen-e-lee/" className="hover:underline hover:text-red-300">LinkedIn</a> or <a href="mailto:helenelee3@outlook.com" className="hover:underline hover:text-red-300">Email</a> me directly.</p>

      </section>
      
    // </main>
  );
}
