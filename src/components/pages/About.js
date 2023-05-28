import React from 'react';
//import profileImage from "../../assets/HelenLee.jpg";
//import helenImage from "../../assets/helen-framed.png";
//import helenImage from "../../assets/helen-beach.jpg";
import helenImage from "../../assets/helen-beach-black-white-curl.jpg";

export default function About() {
  return (
    <main className="m-auto flex flex-row main-container">
        <aside className="pr-10 bg-dark hover:bg-light">
          {/* space for photo */}
        </aside>
      {/* <aside className="image-container"> */}
        {/* aside aside aside */}
        {/* <img src={helenImage} alt="helen head shot"></img> */}
      {/* </aside> */}
      <section className="w-2/4 pt-20 pl-20 about-container">
          <h1 className="about-me mb-5">Hi, I'm Helen Lee.</h1>
          <p className="about-me mb-5"> Welcome to my portfolio! </p>
          <p className="about-me mb-5"> I am a developer based in beautiful Perth, in Western Australia. 
          Over the years I have coded in different languages and environments where I have honed my 
          skills in problem solving, attention to detail, and collaboration. 
          I am passionate about creating user friendly applications that simplify peoples lives. </p>
          <p className="about-me mb-5">Having completed a Full Stack Developer bootcamp course at UWA 
          I am now moving into the next phase of my career….and excited about it!! I have added React, 
          Javascript, MongoDb, MySQL, Node, GraphQL, CSS, HTML and much more to my skillset and am looking for 
          an opportunity where I can continue to grow and learn whilst becoming a valuable company asset! </p>
          
          <p className="about-me mb-10"> When not coding I love to excercise, read and hang out with family and friends.     </p>
          
          <p className="mb-10 highlight hand-written text-3xl text-center hover:underline pb-5"><a href="mailto:helenelee3@outlook.com?subject=Opportunity">Would love to hear from you <br></br>if you have an opportunity for me!!.</a></p>
          

      </section>
      
    </main>
  );
}
