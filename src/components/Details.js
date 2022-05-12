import React from "react";

function Details(props) {
    return(
        <div className="Details">
            <h2 className="Details--title">
                {props.title}
            </h2>
            <p className="Details--text">
                {props.text}
            </p>
        </div>
    );
};

export default Details;