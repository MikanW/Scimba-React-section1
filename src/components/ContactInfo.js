import React from "react";
import EmailIcon from "./../images/Mail.png"

function ContactInfo() {
    return(
        <div className="contact--btn">
            <img src={EmailIcon}></img>
            <p className="contact--text">Email</p>
        </div>
    );
};

export default ContactInfo;