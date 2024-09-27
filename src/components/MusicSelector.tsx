// src/components/MusicSelector.tsx

import React, { useState } from 'react';
import { musicData, MusicPiece } from '../data/musicData';
import MusicDetails from './MusicDetails';

const MusicSelector: React.FC = () => {
    const [selectedPiece, setSelectedPiece] = useState < MusicPiece | null > (null);

    const handleSelectPiece = (piece: MusicPiece) => {
        setSelectedPiece(piece);
    };

    return (
        <div>
            <h1>Select a Music Piece</h1>
            <ul>
                {musicData.map((piece) => (
                    <li key={piece.id} onClick={() => handleSelectPiece(piece)} style={{ cursor: 'pointer' }}>
                        {piece.shabadTitle} - {piece.raag} ({piece.difficulty})
                    </li>
                ))}
            </ul>
            {selectedPiece && <MusicDetails piece={selectedPiece} />}
        </div>
    );
};

export default MusicSelector;
