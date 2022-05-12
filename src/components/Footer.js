import React from "react";
import Twitter from "./../images/TwitterIcon.png"
import Facebook from "./../images/FacebookIcon.png"
import Instagram from "./../images/InstagramIcon.png"
import Linkedin from "./../images/LinkedinIcon.png"
import GitHub from "./../images/GitHubIcon.png"

function Footer() {
    return(
        <div className="footer">
            <img src={Twitter}></img>
            <img src={Facebook}></img>
            <img src={Instagram}></img>
            <img src={Linkedin}></img>
            <img src={GitHub}></img>
        </div>
    );
};

export default Footer;