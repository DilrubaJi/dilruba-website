import React from "react";
import { glossary, groupGlossaryByFirstLetter } from "../data/glossary";

function Glossary() {
    const groupedGlossary = groupGlossaryByFirstLetter(glossary);

    return (
        <div className="container">
            <h2>Glossary</h2>
            {Object.keys(groupedGlossary).sort().map(letter => (
                <div key={letter}>
                    <h3>{letter}</h3>
                    <ul>
                        {groupedGlossary[letter].map((term, index) => (
                            <li key={index} id={term.word.toLowerCase()}>
                                <strong>{term.word}</strong>: {term.definition}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Glossary;
