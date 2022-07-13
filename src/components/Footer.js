import React from "react";
import githubLogo from "../img/github.png";

function Footer() {

    return(
        <div className="footer">
            <a className="footer-text" href="https://github.com/Ro-bu">Made by Ro-bu <img src={githubLogo} alt="github logo"></img></a>
        </div>
    )
}

export default Footer;