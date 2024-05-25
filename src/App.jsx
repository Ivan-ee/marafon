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
import React from "react";
import {Ask} from "./components/Ask.jsx";
import {Footer} from "./components/Footer.jsx";


export const App = () => {

    return (


        <Layout>
            <Header/>
            <Main/>
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
