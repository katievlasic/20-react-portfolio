import React from "react";
import resume from "../assets/resumePreview.jpg"


function aboutMe() {
  return (
    <div className="container">
        <h2>Resume
        </h2>
    <p>Please click on the resume preview to view a copy in the web browser:</p>
        <a class="resume" href="https://drive.google.com/file/d/164-REyxiyUyNl8cAh073e6bT1pu9ec2w/view?usp=sharing"><img src={resume} alt="resume preview" class="image"></img> </a>
    </div>
  );
}

export default aboutMe;