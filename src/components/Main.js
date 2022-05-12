import React from "react";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import Details from "./Details";

function Main(){
    return(
        <div className="mainBody">
            <BasicInfo
                name={"Laura Smith"}
                title={"Frontend Developer"}
                url={"laurasmith.website"}
            />
            <ContactInfo />
            <Details
                title={"About"}
                text={"I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."}
            />
            <Details
                title={"Interests"}
                text={"Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."}
            />
        </div>
    );
};

export default Main;