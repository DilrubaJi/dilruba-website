import React from "react";
import ComingSoon from "../components/ComingSoon";

function Practice() {
    return (
        <div className="container">
            <h2>Practice</h2>
            <ComingSoon />
            <p>
                Welcome to the Practice section! Here, you will find a variety of resources to help you improve your skills on the Dilruba. This section will include:
            </p>
            <ul>
                <li><strong>Alankaar Practice Examples:</strong> Exercises to help you master the basic patterns and scales.</li>
                <li><strong>Alaaps:</strong> Slow, meditative introductions to ragas that explore the key notes and mood.</li>
                <li><strong>Techniques:</strong> Detailed guides on bowing, fingering, and other essential techniques.</li>
                <li><strong>Advanced Exercises:</strong> Challenging exercises to take your playing to the next level.</li>
                <li><strong>Video Tutorials:</strong> Step-by-step video guides to help you learn and practice effectively.</li>
            </ul>
            <p>
                Stay tuned as we continue to add more content to help you on your musical journey with the Dilruba.
            </p>
        </div>
    );
}

export default Practice;