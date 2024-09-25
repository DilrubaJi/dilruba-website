import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/beginners-tutorial">Beginners Tutorial</Link></li>
                <li><Link to="/tuning">Tuning</Link></li>
                <li><Link to="/practice">Practice</Link></li>
                <li><Link to="/sargam-notation">Sargam Notation</Link></li>
                <li><Link to="/raag-kirtan">Raag Kirtan</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/glossary">Glossary</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
