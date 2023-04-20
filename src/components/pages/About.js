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
          <h1 className="about-me">Hi, I'm Helen Lee</h1>
          <p className="about-me"> I am a developer based in Perth, Australia. </p>
          <p className="about-me"> I have been working in the IT industry for several year - coding, analysis, support, team lead...</p>
          <p className="about-me"> I love the challenges of producing great applications that exceed the clients requirements!</p>
          <p className="about-me">When not coding I love to excercise, read and hang out with family and friends.     </p>
      </section>
      
    </main>
  );
}
