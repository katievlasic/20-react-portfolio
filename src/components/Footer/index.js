import React from 'react';
import linkIcon from "../../assets/linkedinIcon.png"
import mailIcon from "../../assets/mailIcon.png"
import gitIcon from "../../assets/githubIcon.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>
          Made by Katie Vlasic.
        </h4>
        <div class="footerLinks continer">
        <a href="linkedin.com/in/kathrynvlasic"><img class="row" src={linkIcon} alt="linkedin icon"></img></a>
        <a href=""><img class="row" src={mailIcon} alt="envelope icon"></img></a>
        <a href="https://github.com/katievlasic"><img class="row" src={gitIcon} alt="github cat icon"></img></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
