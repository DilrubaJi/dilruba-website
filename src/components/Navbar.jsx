import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            {/* Mobile Menu */}
            <ul className={isOpen ? "mobile-menu open" : "mobile-menu"}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/beginners-tutorial" onClick={toggleMenu}>Beginners Tutorial</Link></li>
                <li><Link to="/tuning" onClick={toggleMenu}>Tuning</Link></li>
                <li><Link to="/practice" onClick={toggleMenu}>Practice</Link></li>
                <li><Link to="/sargam-notation" onClick={toggleMenu}>Sargam Notation</Link></li>
                <li><Link to="/raag-kirtan" onClick={toggleMenu}>Raag Kirtan</Link></li>
                <li><Link to="/resources" onClick={toggleMenu}>Resources</Link></li>
                <li><Link to="/glossary" onClick={toggleMenu}>Glossary</Link></li>
            </ul>
            {/* Desktop Menu */}
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
