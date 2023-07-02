import React from 'react'

const CardTitle = (props) => {
    const Component = props.as || "h3";
    const classnames = ["cardTitle"];

    if (props.className) {
        classnames.push(props.classNames);
    }

    return (
        <Component className={classnames.join(" ")}>{props.children}</Component>
    );
}

export default CardTitle;