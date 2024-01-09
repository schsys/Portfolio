import React, { useState } from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import resume from "../../assets/ldsch-resume.pdf";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="button-resume">
        <a href={resume} download="ldsch-resume.pdf">
          resume
        </a>
      </div>
      <div className="app__navbar-btnCAT">
        <a href="https://calendly.com/schsistemas/reuniao-de-trabalho" target="_blank" rel="noopener noreferrer">schedule a meeting</a>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(!toggle)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(!toggle)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href={resume} download="ldsch-resume.pdf">
                  resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
