import React, { useState } from 'react';

const CarInfo = (props) => {
    const classnames = ["cardinfo"];
    if (props.className) {
        classnames.push(props.className);
    }

    (function () {
        let infoHabilete = document.querySelector('.info-habilete');

        function showHabilete() {
            infoHabilete.classlist.add('js-is-visible')
        }

        infoHabilete.onMouseOver = showHabilete;
        infoHabilete.onMouseLeave = showHabilete;
    })();



    return (
        <p className={classnames.join(" ")}><span></span></p>
    );
}

export default CarInfo;