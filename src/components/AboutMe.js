import React from "react";
import "../styles/AboutMe.css";

const styles = {
  a: {
    margin: "100px"
  },
  b: {
    fontsize: "70px"
  }
};

function aboutMe() {
  return (
    <div style={styles.a} className="container">
        <h2>About Me
        </h2>
        <img src="../src/assets/katie.jpg" alt="profile picture"></img>
    <p>Welcome to my portfolio page! My name is Katie Vlasic, and I'm an avid learner. Originally from Minnesota, I received a B.S. in Materials Science and Engineering from the University of Minnesota- Twin Cities. I worked as a Fluids Engineer offshore of Louisiana in the Gulf of Mexico on drilling rigs and then transitioned into a Quality Engineer role for a window manufacturer. I'm passionate about the growing IoT space and excited to use what foundational knowledge I've learned upon completing the U of MN coding boot camp.</p>
    </div>
  );
}

export default aboutMe;