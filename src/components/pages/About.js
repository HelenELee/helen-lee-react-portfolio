import React from 'react';
//import profileImage from "../../assets/HelenLee.jpg";
//import helenImage from "../../assets/helen-framed.png";
//import helenImage from "../../assets/helen-beach.jpg";
import helenImage from "../../assets/helen-beach-black-white-curl.jpg";

export default function About() {
  return (
    <main className="m-auto flex flex-row">
      {/* <aside className="m-auto pr-10 w-2/4 h-2/4"> */}
        {/* <img src={helenImage} alt="Helen Lee head shot" className="photo" /> */}
        <aside className="pr-10 bg-dark hover:bg-light">
  
        </aside>

      {/* </aside> */}
      <section className="w-2/4 pt-20 pl-20">
          <h1 className="about-me mb-5">Hi, I'm Helen Lee.</h1>
          <p className="about-me mb-5"> Welcome to my portfolio! </p>
          <p className="about-me mb-5"> I am a developer based in beautiful Perth, in Western Australia. 
          Over the years I have coded in different languages and environments where I have honed my 
          skills in problem solving, attention to detail, and collaboration. 
          I am passionate about creating user friendly applications that simplify peoples lives. </p>
          <p className="about-me mb-5">Having completed a Full Stack Developer bootcamp course at UWA 
          I am now moving into the next phase of my career….and excited about it!! I have added React, 
          Javascript, MongoDb, MySQL, Node, CSS, HTML and much more to my skillset and am looking for 
          an opportunity where I can continue to grow and learn whilst becoming a valuable company asset! </p>
          
          <p className="about-me mb-10"> When not coding I love to excercise, read and hang out with family and friends.     </p>
          {/* <p className="about-me">No matter what your current ability is, effort is what ignites that ability and
turns it into accomplishment – Carol Dweck, Mindset</p> */}
      </section>
      
    </main>
  );
}
