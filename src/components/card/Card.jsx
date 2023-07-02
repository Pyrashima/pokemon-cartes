import React from 'react'

import Image from "../image/Image";
import CardTitle from "../card-title/CardTitle";
import CardInfo from "../card-info/CarInfo";
import "./Card.css"

const Card = (props) => {
    const classnames = ["card"];
    if (props.className) classnames.push(props.className);

    return (
        <div className={classnames.join(" ")}>
            <Image
                src={props.src}
                alt={props.alt}
                loading={props.loading}
            />

            <CardTitle nom={props.nom} />

            <CardInfo habilete={props.habilete} />
        </div>
    );
}

export default Card;