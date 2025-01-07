import React from 'react';
import './PitchIndicator.css';

const PitchIndicator = ({ pitch, note, referencePitch }) => {
    const calculateOffset = (pitch, noteFreq) => {
        const semitoneRatio = Math.pow(2, 1 / 12);
        const offset = Math.log(pitch / noteFreq) / Math.log(semitoneRatio);
        return offset * 100; // Scale the offset for visualization
    };

    const offset = calculateOffset(pitch, referencePitch);

    const getBackgroundColor = (offset) => {
        const absOffset = Math.abs(offset);
        if (absOffset <= 5) {
            return '#00ff00'; // Green
        } else if (absOffset <= 10) {
            return '#ffff00'; // Yellow
        } else {
            return '#ff8000'; // Orange
        }
    };

    const backgroundColor = getBackgroundColor(offset);

    return (
        <div className="pitch-indicator" style={{ backgroundColor }}>
            <div className="indicator" style={{ left: `${Math.min(Math.max(50 + offset, 0), 100)}%` }}></div>
            <div className="note-label">{note}</div>
        </div>
    );
};

export default PitchIndicator;