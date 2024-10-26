// src/data/musicData.ts

type OctaveType = 'low' | 'normal' | 'high';
type NoteType = 'shudh' | 'komal' | 'tivra';

export type MusicNote = {
    note: string; // e.g., Sa, Re, Ga
    octave: OctaveType;
    type: NoteType;
};

// export type Beat = Note[];

export type MusicPiece = {
    id: number;
    raag: string;
    difficulty: 'easy' | 'medium' | 'hard';
    taal: string;
    numberOfBeats: number;
    shabadTitle: string;
    lines: MusicNote[][]; // Array of beats where each beat is an array of notes (max 2)
};

function mapMusicData(input: string[][]): MusicNote[][] {
    return input.map(line => {
        const notesLine = line[0]; // Get the single string line
        const notes: MusicNote[] = []; // Initialize an array to hold note objects

        // Loop through each character in the string
        for (let i = 0; i < notesLine.length; i++) {
            const char = notesLine[i];
            let octave: OctaveType = 'normal';
            let type: NoteType = 'shudh';

                // Determine the type based on case
                if (char === char.toLowerCase()) {
                    type = 'komal';
                }

                // Check next character to determine octave
                if (i + 1 < notesLine.length) {
                    if (notesLine[i + 1] === '_') {
                        octave = 'low';
                        i++; // Skip the underscore
                    } else if (notesLine[i + 1] === '-') {
                        octave = 'high';
                        i++; // Skip the dash
                    }
                }
            
            // Push the note object to the array
            notes.push({ note: char, octave: octave, type: type });
        }

        return notes; // Return the array of notes for this line
    });
}

// Example input
const input: string[][] = [
    ['      RAHAO     '],
    ['        S-dPdMPGM'],
    ['rrGMGRSS        '],
    ['        d_d_N_SrrSS'],
    ['GMPMGrSS        '],
    ['                '],
    ['      PADHA1    '],
    ['        dMPPddNN'],
    ['S-S-S-S-r-r-S-S-        '],
    ['        r-r-r-r-r-r-S-S-'],
    ['NS-r-S-ddPP        '],
    ['        MdPMGPMG'],
    ['rrGMGrSS        '],
    ['                '],
    ['  MUSIC PIECE   '],
    ['        S-S-NdNNS-S-'],
    ['S-S-NddPP        '],
    ['        MdPMGPMG'],
    ['rrGMdddd        '],
];

const input2: string[][] = [
    ['N_SRgRRRSGMGMggRS'],
    ['PPPDMGMMggRRn_n_SS']
];

const input3: string[][] = [
    ['rrrSSN_S'],
    ['rrrSSSS'],
    ['GGMddPP'],
    ['GGMrrSS'],
    ['ddNS-S-S-S-'],
    ['r-r-S-NNS-S-'],
    ['S-S-NddPP'],
    ['GGMrrSS'],
];


export const musicData: MusicPiece[] = [
    {
        id: 1,
        raag: 'Bhairao',
        difficulty: 'hard',
        taal: 'Teentaal',
        numberOfBeats: 16,
        shabadTitle: 'Sargam in Raag Yaman',
        lines: mapMusicData(input)
    },
    {
        id: 2,
        raag: 'Majh',
        difficulty: 'medium',
        taal: 'Teentaal',
        numberOfBeats: 16,
        shabadTitle: 'Simran in Majh',
        lines: mapMusicData(input2)
    },
    {
        id: 3,
        raag: 'Bhairao',
        difficulty: 'medium',
        taal: 'Rupak',
        numberOfBeats: 7,
        shabadTitle: 'Simran in Bhairo',
        lines: mapMusicData(input3)
    },
];

