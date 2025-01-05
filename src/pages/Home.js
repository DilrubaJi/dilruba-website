import React from "react";
import dilrubaPic from "../pages/assets/images/dilruba-pic.jpg";

function Home() {
    return (
        <div className="container">
            <h2>Welcome to Dilruba Hub</h2>
            <p>
                Welcome to Dilruba Hub, your go-to resource for learning about the beautiful and soulful Dilruba. Whether you are a seasoned musician or a curious beginner, we aim to provide you with all the information and resources you need to explore this traditional Sikh stringed instrument.
            </p>
            <p>
                The Dilruba, with its mesmerising sound and intricate design, holds a special place in Indian classical music and Sikh spiritual traditions. Known for its melodic depth and versatility, the Dilruba is often used in Kirtan to create an atmosphere of devotion and tranquillity. Its unique sound resonates deeply, making it a powerful medium for expressing emotions and connecting with the divine.
            </p>
            <p>
                Our mission is to engage and share the rich heritage of the Dilruba with the world. Through detailed guides, tutorials, and historical insights, we hope to inspire a new generation of musicians to appreciate and play this exquisite instrument. As we grow, we plan to expand our content to include other traditional instruments, offering a comprehensive platform for Indian classical music enthusiasts.
            </p>
            <p>
                At Dilruba Hub, you can explore the origins of the instrument, learn about its construction, and dive into the techniques required to master it. We also provide resources on Gurmat Sangeet, the Sikh musical tradition that prominently features the Dilruba in Kirtan performances. Discover the connection between the Dilruba and the spiritual compositions of the Sikh Gurus, as well as its role in preserving the sanctity of Shabad Kirtan.
            </p>
            <p>
                Dive into our resources, learn about the history and technical aspects of the Dilruba, and join our community of passionate musicians. Together, let's keep the legacy of these timeless instruments alive and thriving. Whether you are here to learn, teach, or simply appreciate the artistry of Kirtan and Indian classical music, we welcome you with open arms.
            </p>
            <img src={dilrubaPic} alt="Dilruba" />
        </div>
    );
} 

export default Home;
