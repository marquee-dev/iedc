import React from "react";
import "./Home.scss";
import About from "./About";
import UpcomingEvents from "./UpcomingEvents";
import Team from "./Team";
import Experiences from "./Experiences";
import OurJourney from "./OurJourney";
import Footer from "./Footer";


export default function Home() {
    return (
        <div className="total">
        <div className="home">
            {/* <Navbar /> */}
            <div className="navbar">
                <div>
                    <span>I</span>
                </div>
                <div>
                    <span>2</span>
                </div>
            </div>
            <div className="home-body">
            <div class="container">
                
    <div className="box">

        <div className="title">
            <span className="block"></span>
            <h1>IEDC CEC<span></span></h1>
        </div>

        <div className="role">
            <div className="block"></div>
            <p>Empowering Innovators</p>
        </div>
        <div className="role-2">
            <div className="block-2"></div>
            <p className="button">I Have An Idea</p>
        </div>

    </div>
</div>


            </div>
        </div>
        <About/>
        <UpcomingEvents/>
        <Team/>
        <Experiences/>
        <OurJourney/>
        <Footer/>
        </div>
    );
}
