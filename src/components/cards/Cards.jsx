import React, { useState } from 'react';

import Card from "../card/Card";
import "../cards/Cards.css"

const Cards = () => {
    return (
        <section>
            <Card

                image="bulbasaur.png"
                alt="image bulbasaur"
                loading="lazy"
                nom="Bulbasaur"
                habilete={["Overgrow", "Chlorophy"]}
            />

            <Card

                image="charmander.png"
                alt="image charmander"
                loading="lazy"
                nom="Charmander"
                habilete={["Blaze", "Solar Power"]}
            />

            <Card

                image="charizard.png"
                alt="image charizard"
                loading="lazy"
                nom="Charizard"
                habilete={["Blaze", "Solar Power"]}
            />

            <Card

                image="squirtle.png"
                alt="image squirtle"
                loading="lazy"
                nom="Squirtle"
                habilete={["Torent", "Rain Dish"]}
            />

            <Card

                image="vulpix.png"
                alt="image vulpix"
                loading="lazy"
                nom="Vulpix"
                habilete={["Flash Fire", "Drought"]}
            />

            <Card

                image="abra.png"
                alt="image abra"
                loading="lazy"
                nom="Abra"
                habilete={["Synchronize", "Magic guard"]}
            />

            <Card

                image="onix.png"
                alt="image onix"
                loading="lazy"
                nom="Onix"
                habilete={["Sturdy", "Weak Amor"]}
            />

            <Card

                image="cubone.png"
                alt="image cubone"
                loading="lazy"
                nom="Cubone"
                habilete={["Rock Head", "Battle Amor"]}
            />

            <Card

                image="eevee.png"
                alt="image eevee"
                loading="lazy"
                nom="Eevee"
                habilete={["Run Away", "Anticipation"]}
            />

            <Card

                image="mewtwo.png"
                alt="image mewtwo"
                loading="lazy"
                nom="Mewtwo"
                habilete={["Pressure", "Unnerve"]}
            />
        </section>
    )
}

export default Cards