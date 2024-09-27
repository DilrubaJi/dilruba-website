// src/components/MusicDetails.tsx

import React from 'react';
import { MusicNote, MusicPiece } from '../data/musicData';

interface MusicDetailsProps {
    piece: MusicPiece;
}

const MusicDetails: React.FC<MusicDetailsProps> = ({ piece }) => {
    const renderNote1 = (note: MusicNote) => {
        const { note: noteValue, octave, type } = note;
        let formattedNote = noteValue;

        // Add symbols for komal and tivra notes
        if (type === 'komal') formattedNote = `♭${noteValue}`;
        if (type === 'tivra') formattedNote = `#${noteValue}`;

        // Add superscript/subscript for octaves
        if (octave === 'high') formattedNote += '↑';
        if (octave === 'low') formattedNote += '↓';

        return formattedNote;
    };

    const renderNote2 = (note: MusicNote) => {
        const { note: noteValue, octave, type } = note;
        let komalNote = noteValue;

        // Add symbols for komal and tivra notes
        if (type === 'komal' || type === 'tivra') komalNote = `<u>${noteValue.toLowerCase()}</u>`;
        // if (type === 'tivra') komalNote = `#${noteValue}`;

        let octaveNote = komalNote;

        // Add superscript/subscript for octaves
        if (octave === 'high') octaveNote = `${komalNote}<sup>•</sup>`;
        if (octave === 'low') octaveNote = `${komalNote}<sub>•</sub>`;

        return <span dangerouslySetInnerHTML={{ __html: octaveNote }} />;
    };

    const { raag, taal, numberOfBeats, lines, shabadTitle } = piece;

    // Create header row with beat numbers
    const headerRow = Array.from({ length: numberOfBeats }, (_, i) => i + 1);

    return (
        <div>
            <h2>{shabadTitle}</h2>
            <p>
                <strong>Raag:</strong> {raag}
                <br />
                <strong>Taal:</strong> {taal} ({numberOfBeats} beats)
            </p>

            {/* Render a table with beats as columns and music lines as rows */}
            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        {headerRow.map((beatNumber) => (
                            <th key={beatNumber} style={{ border: '1px solid black', padding: '5px' }}>
                                {beatNumber}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {lines.map((line, lineIndex) => (
                        <tr key={lineIndex}>
                            {line.map((note, beatIndex) => (
                                <td key={beatIndex} style={{ border: '1px solid black', padding: '5px' }}>
                                    {renderNote2(note)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MusicDetails;
