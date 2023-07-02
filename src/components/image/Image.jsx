import React from 'react';
import "./Image.css";

const Image = (props) => {
    let loading = "lazy";
    const classnames = ["image"];

    if (props.className) {
        classnames.push(props.children);
    }

    if (props.loading) loading = props.loading;

    return (
        <img
            src={props.scr}
            alt={props.alt}
            className={classnames.join(" ")}
            loading={props.loading}
        />
    );
};

export default Image;