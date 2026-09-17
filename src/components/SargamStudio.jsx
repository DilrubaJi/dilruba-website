import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import styles from './SargamStudio.module.css';

const TAALS = {
    Teental: { name: 'Teental', beats: 16, vibhags: [4, 4, 4, 4], markers: ['X', '2', '0', '3'] },
    Jhaptal: { name: 'Jhaptal', beats: 10, vibhags: [2, 3, 2, 3], markers: ['X', '2', '0', '3'] },
    Rupak: { name: 'Rupak', beats: 7, vibhags: [3, 2, 2], markers: ['0', '2', '3'] },
    Keharwa: { name: 'Keharwa', beats: 8, vibhags: [4, 4], markers: ['X', '0'] },
    Ektal: { name: 'Ektal', beats: 12, vibhags: [2, 2, 2, 2, 2, 2], markers: ['X', '0', '2', '0', '3', '4'] }
};

const SWARA_SEMITONES = {
    S: 0, r: 1, R: 2, g: 3, G: 4, m: 5, M: 6,
    P: 7, d: 8, D: 9, n: 10, N: 11
};

const INITIAL_LINES = [
    {
        id: 'line_1',
        label: 'Sthayi (Line 1)',
        notationText: "S R G m P - D N S' - N D P m G R",
        gurmukhiText: 'ਤੂ - ਠਾ ਕੁਰੁ ਤੁਮ - ਪਹਿ ਅਰ ਦਾ - - ਸਿ ਜੀ - ਉ -',
        englishText: 'Tu - Tha kur Tum - Peh Ar da - - si Ji - u -'
    }
];

export default function SargamStudio() {
    const synthRef = useRef(null);
    const filterRef = useRef(null);

    const [title, setTitle] = useState('Tu Thakur Tum Peh Ardas');
    const [raag, setRaag] = useState('Asa');
    const [currentTaal, setCurrentTaal] = useState('Teental');
    const [tempo, setTempo] = useState(90);
    const [baseSa, setBaseSa] = useState('C#4');
    const [lines, setLines] = useState(INITIAL_LINES);

    const [isPlaying, setIsPlaying] = useState(false);
    const [activeBeatGlobal, setActiveBeatGlobal] = useState({ lineIndex: -1, beatIndex: -1 });

    const [savedCompositions, setSavedCompositions] = useState([]);
    const [activeTab, setActiveTab] = useState('editor');

    useEffect(() => {
        filterRef.current = new Tone.Filter({
            frequency: 1800,
            type: 'lowpass',
            rolloff: -24,
            Q: 3
        }).toDestination();

        synthRef.current = new Tone.PolySynth(Tone.Synth, {
            oscillator: {
                type: "triangle"
            },
            envelope: {
                attack: 0.8,   // Slow fade in
                decay: 0.3,
                sustain: 0.8,
                release: 1.2   // Long fade out
            },
            portamento: 0.08
        }).connect(filterRef.current);

        const localData = localStorage.getItem('sargam_saved_compositions');
        if (localData) {
            try { setSavedCompositions(JSON.parse(localData)); } catch (e) { }
        }

        return () => {
            Tone.Transport.stop();
            Tone.Transport.cancel();
            if (synthRef.current) synthRef.current.dispose();
            if (filterRef.current) filterRef.current.dispose();
        };
    }, []);

    const parseTokens = (str) => str.trim().split(/\s+/).filter((t) => t !== '|');

    const handlePlay = async () => {
        await Tone.start();
        if (isPlaying) {
            handleStop();
            return;
        }

        setIsPlaying(true);
        Tone.Transport.bpm.value = tempo;

        let currentLineIdx = 0;
        let currentBeatIdx = 0;

        Tone.Transport.scheduleRepeat((time) => {
            if (currentLineIdx >= lines.length) currentLineIdx = 0;

            const currentLine = lines[currentLineIdx];
            const notes = parseTokens(currentLine.notationText);
            const currentToken = notes[currentBeatIdx] || '-';

            const lIdx = currentLineIdx;
            const bIdx = currentBeatIdx;

            Tone.Draw.schedule(() => {
                setActiveBeatGlobal({ lineIndex: lIdx, beatIndex: bIdx });
            }, time);

            if (currentToken !== '-' && currentToken !== '.') {
                let octaveOffset = 0;
                let clean = currentToken;

                if (currentToken.endsWith(',')) {
                    octaveOffset = -12;
                    clean = currentToken.slice(0, -1);
                } else if (currentToken.endsWith("'")) {
                    octaveOffset = 12;
                    clean = currentToken.slice(0, -1);
                }

                const semitones = (SWARA_SEMITONES[clean] ?? 0) + octaveOffset;
                const freq = Tone.Frequency(baseSa).transpose(semitones);

                synthRef.current?.triggerAttackRelease(freq, '4n', time);
            }

            currentBeatIdx++;
            if (currentBeatIdx >= TAALS[currentTaal].beats) {
                currentBeatIdx = 0;
                currentLineIdx = (currentLineIdx + 1) % lines.length;
            }
        }, '4n');

        Tone.Transport.start();
    };

    const handleStop = () => {
        Tone.Transport.stop();
        Tone.Transport.cancel();
        setIsPlaying(false);
        setActiveBeatGlobal({ lineIndex: -1, beatIndex: -1 });
    };

    const handleAddLine = () => {
        setLines([
            ...lines,
            {
                id: `line_${Date.now()}`,
                label: `Antara / Line ${lines.length + 1}`,
                notationText: "P D N S' S' - N D P m G R S -",
                gurmukhiText: 'ਹਰਿ ਜੀ - ਉ ਆ - ਪੇ ਦਇ ਆ - ਲੁ ਹੋ -',
                englishText: 'Har ji - u A - pe Da i a - lu Ho -'
            }
        ]);
    };

    const handleRemoveLine = (id) => {
        if (lines.length === 1) return;
        setLines(lines.filter((l) => l.id !== id));
    };

    const handleUpdateLine = (id, field, value) => {
        setLines(lines.map((l) => (l.id === id ? { ...l, [field]: value } : l)));
    };

    const handleSaveComposition = () => {
        const newComp = {
            id: `comp_${Date.now()}`,
            title,
            raag,
            taal: currentTaal,
            tempo,
            baseSa,
            lines,
            savedAt: new Date().toLocaleDateString()
        };

        const updatedList = [newComp, ...savedCompositions.filter((c) => c.title !== title)];
        setSavedCompositions(updatedList);
        localStorage.setItem('sargam_saved_compositions', JSON.stringify(updatedList));
        alert(`Saved "${title}"!`);
    };

    const renderSwara = (token) => {
        if (!token || token === '-') return <span style={{ color: '#64748b' }}>-</span>;

        let isMandra = token.endsWith(',');
        let isTaar = token.endsWith("'");
        let clean = token.replace(/[,']/g, '');

        const isKomal = clean === clean.toLowerCase() && !['S', 'P'].includes(clean.toUpperCase());

        return (
            <span className={styles.swaraNote}>
                {isTaar && <span style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px' }}>•</span>}
                <span style={{ textDecoration: isKomal ? 'underline' : 'none' }}>
                    {clean.toUpperCase()}
                </span>
                {isMandra && <span style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px' }}>•</span>}
            </span>
        );
    };

    const taalSpec = TAALS[currentTaal];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>
                        🎶 Sargam Studio
                        <span className={styles.badge}>Dilruba & Taus</span>
                    </h1>
                    <p className={styles.subtitle}>Gurbani Shabad Multi-Line Notation Builder</p>
                </div>

                <div className={styles.tabGroup}>
                    <button
                        onClick={() => setActiveTab('editor')}
                        className={`${styles.tabBtn} ${activeTab === 'editor' ? styles.tabBtnActive : ''}`}
                    >
                        Studio Editor
                    </button>
                    <button
                        onClick={() => setActiveTab('library')}
                        className={`${styles.tabBtn} ${activeTab === 'library' ? styles.tabBtnActive : ''}`}
                    >
                        Saved Library ({savedCompositions.length})
                    </button>
                </div>
            </header>

            {activeTab === 'editor' && (
                <div>
                    <div className={styles.controlsGrid}>
                        <div className={styles.spanTwo}>
                            <label className={styles.fieldLabel}>Composition Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className={styles.inputField}
                            />
                        </div>

                        <div>
                            <label className={styles.fieldLabel}>Raag</label>
                            <input
                                type="text"
                                value={raag}
                                onChange={(e) => setRaag(e.target.value)}
                                className={styles.inputField}
                            />
                        </div>

                        <div>
                            <label className={styles.fieldLabel}>Taal Cycle</label>
                            <select
                                value={currentTaal}
                                onChange={(e) => setCurrentTaal(e.target.value)}
                                className={styles.inputField}
                            >
                                {Object.keys(TAALS).map((t) => (
                                    <option key={t} value={t}>{t} ({TAALS[t].beats} B)</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className={styles.fieldLabel}>Base Sa Pitch</label>
                            <select
                                value={baseSa}
                                onChange={(e) => setBaseSa(e.target.value)}
                                className={styles.inputField}
                            >
                                <option value="A3">A3</option>
                                <option value="A#3">A#3 / Bb3</option>
                                <option value="C4">C4</option>
                                <option value="C#4">C#4 (Dilruba Tuning)</option>
                                <option value="D4">D4</option>
                                <option value="D#4">D#4</option>
                                <option value="E4">E4</option>
                            </select>
                        </div>

                        <div>
                            <label className={styles.fieldLabel}>Tempo ({tempo} BPM)</label>
                            <input
                                type="range"
                                min="50"
                                max="180"
                                value={tempo}
                                onChange={(e) => setTempo(Number(e.target.value))}
                                style={{ width: '100%', accentColor: '#f59e0b' }}
                            />
                        </div>
                    </div>

                    <div className={styles.actionBar}>
                        <div className={styles.btnGroup}>
                            <button
                                onClick={isPlaying ? handleStop : handlePlay}
                                className={`${styles.btnPlay} ${isPlaying ? styles.btnStop : ''}`}
                            >
                                {isPlaying ? '⏹ Stop' : '▶ Play Composition'}
                            </button>

                            <button onClick={handleAddLine} className={styles.btnSecondary}>
                                + Add Line / Avartan
                            </button>
                        </div>

                        <button onClick={handleSaveComposition} className={styles.btnSave}>
                            💾 Save Composition
                        </button>
                    </div>

                    <div>
                        {lines.map((line, lineIdx) => {
                            const notesArr = parseTokens(line.notationText);
                            const gurmukhiArr = parseTokens(line.gurmukhiText);
                            const englishArr = parseTokens(line.englishText);

                            return (
                                <div key={line.id} className={styles.lineCard}>
                                    <div className={styles.lineHeader}>
                                        <input
                                            type="text"
                                            value={line.label}
                                            onChange={(e) => handleUpdateLine(line.id, 'label', e.target.value)}
                                            className={styles.lineLabelInput}
                                        />

                                        {lines.length > 1 && (
                                            <button onClick={() => handleRemoveLine(line.id)} className={styles.btnDelete}>
                                                Delete Line
                                            </button>
                                        )}
                                    </div>

                                    <div className={styles.inputsGrid}>
                                        <div>
                                            <label className={styles.fieldLabel}>Sargam Notes</label>
                                            <input
                                                type="text"
                                                value={line.notationText}
                                                onChange={(e) => handleUpdateLine(line.id, 'notationText', e.target.value)}
                                                className={styles.inputField}
                                            />
                                        </div>

                                        <div>
                                            <label className={styles.fieldLabel}>Primary Syllables</label>
                                            <input
                                                type="text"
                                                value={line.gurmukhiText}
                                                onChange={(e) => handleUpdateLine(line.id, 'gurmukhiText', e.target.value)}
                                                className={`${styles.inputField} ${styles.gurmukhi}`}
                                            />
                                        </div>

                                        <div>
                                            <label className={styles.fieldLabel}>Secondary Syllables</label>
                                            <input
                                                type="text"
                                                value={line.englishText}
                                                onChange={(e) => handleUpdateLine(line.id, 'englishText', e.target.value)}
                                                className={styles.inputField}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.beatScrollContainer}>
                                        <div className={styles.beatGridRow}>
                                            {Array.from({ length: taalSpec.beats }).map((_, beatIdx) => {
                                                const isActive =
                                                    activeBeatGlobal.lineIndex === lineIdx && activeBeatGlobal.beatIndex === beatIdx;

                                                let marker = '';
                                                let beatAccumulator = 0;
                                                for (let v = 0; v < taalSpec.vibhags.length; v++) {
                                                    if (beatIdx === beatAccumulator) {
                                                        marker = taalSpec.markers[v];
                                                        break;
                                                    }
                                                    beatAccumulator += taalSpec.vibhags[v];
                                                }

                                                return (
                                                    <div
                                                        key={beatIdx}
                                                        className={`${styles.beatCard} ${isActive ? styles.beatCardActive : ''}`}
                                                    >
                                                        <div className={styles.beatTopHeader}>
                                                            <span>{beatIdx + 1}</span>
                                                            <span className={styles.marker}>{marker}</span>
                                                        </div>

                                                        <div>{renderSwara(notesArr[beatIdx])}</div>

                                                        <div className={`${styles.primaryText} ${styles.gurmukhi}`}>
                                                            {gurmukhiArr[beatIdx] || '—'}
                                                        </div>

                                                        <div className={styles.secondaryText}>
                                                            {englishArr[beatIdx] || '—'}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}