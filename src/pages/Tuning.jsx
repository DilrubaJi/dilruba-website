import React, { useState, useEffect } from "react";
import * as Pitchfinder from "pitchfinder";

function Tuning() {
    const [note, setNote] = useState(null);
    const [isTuning, setIsTuning] = useState(false);

    const startTuning = () => {
        setIsTuning(true);
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const pitchDetector = Pitchfinder.AMDF();
        analyser.fftSize = 2048;

        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);

            const dataArray = new Float32Array(analyser.fftSize);
            const detectPitch = () => {
                analyser.getFloatTimeDomainData(dataArray);
                const pitch = pitchDetector(dataArray);
                if (pitch) {
                    const note = pitchToNoteName(pitch);
                    setNote({ name: note, freq: pitch });
                }
                requestAnimationFrame(detectPitch);
            };
            detectPitch();
        });

        return () => {
            audioContext.close();
        };
    };

    const pitchToNoteName = (pitch) => {
        const noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const noteNumber = Math.round(12 * (Math.log(pitch / 440) / Math.log(2))) + 69;
        const octave = Math.floor(noteNumber / 12) - 1;
        const note = noteStrings[noteNumber % 12];
        return `${note}${octave}`;
    };

    return (
        <div className="container">
            <h2>Tuner</h2>
            <p>Click the button below to start tuning:</p>
            {!isTuning && <button onClick={startTuning}>Start Tuning</button>}
            {isTuning && (
                <div className="tuner-display">
                    {note ? (
                        <div>
                            <h3>Detected Note: {note.name}</h3>
                            <p>Frequency: {note.freq.toFixed(2)} Hz</p>
                        </div>
                    ) : (
                        <p>Listening...</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Tuning;
