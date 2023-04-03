import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
// import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/lucianoschmarsow" rel="noreferrer" target="_blank" style={{height: 18}}><BsLinkedin /></a>
      </div>
      <div>
        <a href="https://github.com/clarkos" rel="noreferrer" target="_blank" style={{height: 18}}><BsGithub /></a>
      </div>
      <div>
        <a href="https://twitter.com/schsys" rel="noreferrer" target="_blank" style={{height: 18}}><BsTwitter /></a>
      </div>
    </div>
  );
};

export default SocialMedia;
