import useSmoothScroll from "./SmoothScroll.jsx";
import React, { useRef } from "react";
import { Button } from "./Button.jsx";

export const Footer = () => {
    const footerRef = useRef(null);

    useSmoothScroll(footerRef);

    return (
        <div className="footer" ref={footerRef}>
            <Button href="#reviews">Отзывы</Button>
            <Button href="#whoIsIt">Преподаватель</Button>
            <Button href="#description">Программа</Button>
            <Button href="#FAQ">FAQ</Button>
            <Button style='last-btn' href="#header">Наверх</Button>
        </div>
    );
};