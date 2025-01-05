// src/components/MusicSelector.tsx

import React, { useState } from 'react';
import { musicData, MusicPiece } from '../data/musicData';
import MusicDetails from './MusicDetails';
import './MusicSelector.css';

const MusicSelector: React.FC = () => {
    const [selectedPiece, setSelectedPiece] = useState<MusicPiece | null>(null);

    const handleSelectPiece = (piece: MusicPiece) => {
        setSelectedPiece(piece);
    };

    return (
        <div>
            <ul>
                {musicData.map((piece) => (
                    <li
                        key={piece.id}
                        onClick={() => handleSelectPiece(piece)}
                        className="music-piece"
                    >
                        {piece.shabadTitle} - {piece.raag} ({piece.difficulty})
                    </li>
                ))}
            </ul>
            {selectedPiece && <MusicDetails piece={selectedPiece} />}
        </div>
    );
};

export default MusicSelector;
