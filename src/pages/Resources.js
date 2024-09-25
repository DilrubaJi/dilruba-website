import React from "react";
import { resources } from "../data/resources";

function Resources() {
    return (
        <div className="container">
            <h2>Resources</h2>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            {resource.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Resources;
