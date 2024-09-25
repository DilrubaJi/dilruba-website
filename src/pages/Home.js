import React from "react";
import dilrubaPic from "../pages/assets/images/dilruba-pic.jpg";

function Home() {
    return (
        <div className="container">
            <h2>Welcome to Dilruba Hub</h2>
            <p>The Dilruba is a traditional Sikh stringed instrument used in Raag Kirtan. Learn more about this beautiful instrument and how to play it.</p>
            <img src={dilrubaPic} alt="Dilruba" />
        </div>
    );
}

export default Home;
