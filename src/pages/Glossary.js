import React from "react";
import { glossary } from "../data/glossary";

function Glossary() {
    return (
        <div className="container">
            <h2>Glossary</h2>
            <ul>
                {glossary.map((term, index) => (
                    <li key={index}>
                        <strong>{term.word}</strong>: {term.definition}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Glossary;
