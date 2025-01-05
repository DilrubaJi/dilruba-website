export const glossary = [
    { word: "Alaap", definition: "The introductory section of a raga performance in Indian classical music, showcasing the raga's key notes and mood without rhythm." },
    { word: "Bandish", definition: "A fixed composition in a raga that serves as the main theme for improvisation." },
    { word: "Bhajan", definition: "A devotional song, often dedicated to a deity or spiritual theme, sung with or without instruments." },
    { word: "Chant", definition: "A repetitive rhythmic phrase, often spiritual or meditative, sung in unison by a group or individual." },
    { word: "Gharana", definition: "A school or lineage of Indian classical music or dance, characterised by a distinctive style or tradition." },
    { word: "Gurmat Sangeet", definition: "The Sikh tradition of devotional music based on the teachings of the Guru Granth Sahib and performed in specific ragas." },
    { word: "Jhala", definition: "The concluding section of an instrumental performance, marked by fast and rhythmic improvisations." },
    { word: "Jor", definition: "The second section of a raga performance where rhythm is introduced but without fixed beats." },
    { word: "Khayal", definition: "A major vocal genre in Hindustani classical music, known for its improvisational freedom within a raga." },
    { word: "Kirtan", definition: "Devotional singing of Sikh hymns, often accompanied by instruments such as the tabla and harmonium." },
    { word: "Komal", definition: "A soft or flat note in Indian classical music, as opposed to a shudh (natural) note." },
    { word: "Raag", definition: "A melodic framework in Indian classical music, characterised by specific notes, mood, and rules of improvisation." },
    { word: "Sargam", definition: "The Indian equivalent of solfege, where notes are sung using syllables (Sa, Re, Ga, Ma, Pa, Dha, Ni)." },
    { word: "Shabad", definition: "A hymn or sacred composition from the Guru Granth Sahib." },
    { word: "Shruti", definition: "The smallest audible pitch difference in Indian classical music, often referred to as a microtone." },
    { word: "Taal", definition: "A rhythmic cycle in Indian classical music, defined by a fixed number of beats and divisions." },
    { word: "Tanpura", definition: "A stringed instrument used to provide a continuous drone, essential for Indian classical music performances." },
    { word: "Thaat", definition: "A system of classifying ragas in Hindustani music based on their scale." },
    { word: "Tivra", definition: "A sharp note in Indian classical music, as opposed to a natural (shudh) note." },
    { word: "Vadi", definition: "The most prominent and important note in a raga, often emphasised during a performance." },
    { word: "Sam", definition: "The first beat of a taal cycle, where rhythmic improvisations resolve." },
    { word: "Avartan", definition: "One complete cycle of a taal in Indian classical music." },
    { word: "Meend", definition: "A gliding movement between two notes, characteristic of Indian classical music." },
    { word: "Alankar", definition: "Musical ornamentation or exercises in Indian classical music." },
    { word: "Pakad", definition: "A signature phrase or set of notes that defines a raga's identity." },
    { word: "Bol", definition: "Syllables used in vocal or instrumental music to represent rhythmic patterns or lyrics." },
    { word: "Mandra Saptak", definition: "The lower octave in Indian classical music." },
    { word: "Madhya Saptak", definition: "The middle octave in Indian classical music." },
    { word: "Taar Saptak", definition: "The higher octave in Indian classical music." },
    { word: "Harmonium", definition: "A keyboard instrument commonly used in Indian classical and devotional music." },
    { word: "Tabla", definition: "A pair of hand-played drums used for rhythm in Indian classical music." },
    { word: "Kamaal", definition: "A stylistic feature or extraordinary embellishment in musical improvisation." },
    { word: "Dhrupad", definition: "The oldest surviving genre of Hindustani classical music, with a meditative and austere nature." },
    { word: "Swar", definition: "The seven notes of Indian classical music: Sa, Re, Ga, Ma, Pa, Dha, Ni." }
];


export function groupGlossaryByFirstLetter(glossary) {
    return glossary.reduce((acc, term) => {
        const firstLetter = term.word[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(term);
        return acc;
    }, {});
}
