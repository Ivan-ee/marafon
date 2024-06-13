import React, { useRef } from "react";
import { Button } from "./Button.jsx";
import useSmoothScroll from "./SmoothScroll.jsx";
import image from "../assets/diamond.svg";
import {BtnReviews} from "./BtnReviews.jsx";

export const Header = () => {
    const headerRef = useRef(null);

    useSmoothScroll(headerRef);

    return (
        <div className="header" id="header" ref={headerRef}>
            <Button href="#reviews">Отзывы</Button>
            <Button href="#whoIsIt">Преподаватель</Button>
            <Button href="#description">Программа</Button>
            <Button href="#FAQ">FAQ</Button>
            <BtnReviews href="https://yandex.ru/maps/-/CDrkaFlp"/>
        </div>
    );
};