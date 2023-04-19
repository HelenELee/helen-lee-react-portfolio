import React from 'react';
//import profileImage from "../../assets/HelenLee.jpg";
import helenImage from "../../assets/helen-framed.png";

export default function About() {
  return (
    <main className="w-3/4 pt-20 m-auto flex flex-row">
      <aside className="m-auto p-10">
        <img src={helenImage} alt="Helen Lee head shot" class="photo" />
      </aside>
      <section>
          <h1>Hi, I'm Helen Lee</h1>
          <p> I have been a Lotus Notes developer in am a full stack developer based in Perth Australia and have completed the UWA Full Stack Developer Bootcamp course. 
            Please check out my work in the Portfolio section.</p>

          <p>I have worked in the IT industry in different roles including developer, business analyst, project leader and 
            support analyst, with Lotus Notes & Domino. </p>

          <p>I thrive on producing great applications that exceed the clients requirements!</p>

          <p>When not coding I love to excercise, read and hang out with family and friends.     </p>
     

      </section>
      
    </main>
  );
}
