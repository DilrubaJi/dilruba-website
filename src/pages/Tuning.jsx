import React, { useState, useRef } from "react";
import * as Pitchfinder from "pitchfinder";

function Tuning() {
    const [note, setNote] = useState(null);
    const [isTuning, setIsTuning] = useState(false);
    const [algorithm, setAlgorithm] = useState('AMDF'); // State to switch between algorithms
    const [options, setOptions] = useState({ sampleRate: 44100, threshold: 0.1 }); // Default options
    const audioContextRef = useRef(null);
    const animationFrameIdRef = useRef(null);
    const mediaStreamRef = useRef(null);

    const startTuning = () => {
        setIsTuning(true);
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioContext;
        const analyser = audioContext.createAnalyser();
        const pitchDetector = getPitchDetector(algorithm, options);
        analyser.fftSize = 2048;

        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            mediaStreamRef.current = stream;
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);

            const dataArray = new Float32Array(analyser.fftSize);
            const detectPitch = () => {
                analyser.getFloatTimeDomainData(dataArray);
                let pitch = pitchDetector(dataArray);
                if (pitch) {
                    pitch = applyCorrectionFactor(pitch); // Apply correction factor
                    const note = pitchToNoteName(pitch);
                    setNote({ name: note, freq: pitch });
                }
                animationFrameIdRef.current = requestAnimationFrame(detectPitch);
            };
            detectPitch();
        });
    };

    const stopTuning = () => {
        setIsTuning(false);
        if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
        }
        if (audioContextRef.current) {
            audioContextRef.current.close();
        }
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach(track => track.stop());
        }
    };

    const getPitchDetector = (algorithm, options) => {
        switch (algorithm) {
            case 'YIN':
                return Pitchfinder.YIN(options);
            case 'DynamicWavelet':
                return Pitchfinder.DynamicWavelet(options);
            case 'MacLeod':
                return Pitchfinder.MacLeod(options);
            default:
                return Pitchfinder.AMDF(options);
        }
    };

    const applyCorrectionFactor = (pitch) => {
        const correctionFactor = 1.087528344671202; // Example correction factor for a semitone
        return pitch * correctionFactor;
    };

    const pitchToNoteName = (pitch) => {
        const noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const noteNumber = Math.round(12 * (Math.log(pitch / 440) / Math.log(2))) + 69;
        const octave = Math.floor(noteNumber / 12) - 1;
        const note = noteStrings[noteNumber % 12];
        return `${note}${octave}`;
    };

    const handleOptionChange = (e) => {
        const { name, value } = e.target;
        setOptions(prevOptions => ({
            ...prevOptions,
            [name]: parseFloat(value)
        }));
    };

    const renderOptions = () => {
        switch (algorithm) {
            case 'YIN':
                return (
                    <>
                        <label>Sample Rate: </label>
                        <select name="sampleRate" value={options.sampleRate} onChange={handleOptionChange}>
                            <option value={44100}>44100</option>
                            <option value={48000}>48000</option>
                        </select>
                        <label>Threshold: </label>
                        <select name="threshold" value={options.threshold} onChange={handleOptionChange}>
                            <option value={0.1}>0.1</option>
                            <option value={0.2}>0.2</option>
                        </select>
                    </>
                );
            case 'DynamicWavelet':
                return (
                    <>
                        <label>Sample Rate: </label>
                        <select name="sampleRate" value={options.sampleRate} onChange={handleOptionChange}>
                            <option value={44100}>44100</option>
                            <option value={48000}>48000</option>
                        </select>
                    </>
                );
            case 'MacLeod':
                return (
                    <>
                        <label>Sample Rate: </label>
                        <select name="sampleRate" value={options.sampleRate} onChange={handleOptionChange}>
                            <option value={44100}>44100</option>
                            <option value={48000}>48000</option>
                        </select>
                    </>
                );
            default:
                return (
                    <>
                        <label>Sample Rate: </label>
                        <select name="sampleRate" value={options.sampleRate} onChange={handleOptionChange}>
                            <option value={44100}>44100</option>
                            <option value={48000}>48000</option>
                        </select>
                    </>
                );
        }
    };

    return (
        <div className="container">
            <h2>Tuner</h2>
            <p>Click the button below to start or stop tuning:</p>
            <button onClick={isTuning ? stopTuning : startTuning}>
                {isTuning ? 'Stop Tuning' : 'Start Tuning'}
            </button>
            {isTuning && (
                <div className="tuner-display">
                    {note ? (
                        <div>
                            <h3>Detected Note: {note.name}</h3>
                            <p>Frequency: {note.freq} Hz</p>
                        </div>
                    ) : (
                        <p>Listening...</p>
                    )}
                </div>
            )}
            <div>
                <label>Select Algorithm: </label>
                <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
                    <option value="AMDF">AMDF</option>
                    <option value="YIN">YIN</option>
                    <option value="DynamicWavelet">DynamicWavelet</option>
                    <option value="MacLeod">MacLeod</option>
                </select>
            </div>
            <div>
                {renderOptions()}
            </div>
        </div>
    );
}

export default Tuning;
