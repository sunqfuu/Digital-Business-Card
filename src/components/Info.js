import React from "react";
import OSPhoto from "../Images/sunqfu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={OSPhoto} alt="Orhan Sağır" />
      <h1 className="info--fullname">Orhan Sağır</h1>
      <h5 className="info--role">Front End Developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://github.com/sunqfuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/sunqfuu
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:sagir.o@outlook.com">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/orhansagir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}