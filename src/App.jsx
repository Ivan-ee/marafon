import {Header} from "./components/Header.jsx";
import {Layout} from "./components/Layout.jsx";
import {Main} from "./components/Main.jsx";
import {Salary} from "./components/Salary.jsx";
import {WhoIsIt} from "./components/WhoIsIt.jsx";
import {Reviews} from "./components/Reviews.jsx";
import {Needed} from "./components/Needed.jsx";
import {MySlider} from "./components/Slider.jsx";
import {Orders} from "./components/Orders.jsx";

import {Description} from "./components/Description.jsx";
import {Video2} from "./components/Vidoe2.jsx";
import {About} from "./components/About.jsx";
import {After} from "./components/After.jsx";
import {FAQ} from "./components/FAQ.jsx";
import React, {useEffect, useState} from "react";
import {Ask} from "./components/Ask.jsx";
import {Footer} from "./components/Footer.jsx";
import {HamburgerMenu} from "./components/HamburgerMenu.jsx";
import PopupTelegram from "./components/PopupTelegram.jsx";


export const App = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupCount, setPopupCount] = useState(0);
    const maxPopups = 3;
    const interval = 2 * 60 * 1000;

    useEffect(() => {
        const showPopup = () => {
            setIsPopupVisible(true);
            setPopupCount(prevCount => prevCount + 1);
        };

        if (popupCount < maxPopups) {
            const timer = setTimeout(showPopup, interval);
            return () => clearTimeout(timer);
        }
    }, [popupCount]);

    const handleClose = () => {
        setIsPopupVisible(false);
    };


    return (

        <Layout>
            <Header/>
            {isPopupVisible && <PopupTelegram onClose={handleClose}/>}
            <Main/>
            <HamburgerMenu/>
            <Salary/>
            <WhoIsIt/>
            <Reviews/>
            <Needed/>
            <MySlider/>
            <Orders/>
            <Description/>
            <Video2/>
            <About/>
            <After/>
            <FAQ/>
            <Ask/>
            <Footer/>
        </Layout>
    )
}
