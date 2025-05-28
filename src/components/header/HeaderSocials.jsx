import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a target="_blank" rel="noreferrer" href="mailto:deepakprajapatiproplus@gmail.com">
        <FaEnvelope />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/deepak-prajapati123/">
        <BsLinkedin />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/deepakstwt">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
