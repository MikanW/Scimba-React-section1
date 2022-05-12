import React from "react";

function BasicInfo(props) {
    return (
        <div className="BasicInfo">
            <h2 className="BasicInfo--name">{props.name}</h2>
            <h3 className="BasicInfo--jobTitle">{props.title}</h3>
            <p className="BasicInfo--url">{props.url}</p>
        </div>
    );
};

export default BasicInfo;