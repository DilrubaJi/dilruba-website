export interface RaagInfo {
    id: string;
    name: string;
    gurmukhi: string;
    mood: string;
    aroh: string;
    avroh: string;
    vadi: string;
    samvadi: string;
    niyaas: string;
    anuvadi?: string;
    vivadi?: string;
    microtones?: string;
}

// Ordered by traditional frequency and popularity in Sri Guru Granth Sahib Ji
export const SGGS_RAAGS: RaagInfo[] = [
    {
        id: "asa",
        name: "Asa",
        gurmukhi: "ਆਸਾ",
        mood: "Hopeful, inspiring, encouraging; traditionally sung in early morning (Amrit Vela).",
        aroh: "S R M P D S'",
        avroh: "S' N D P M G R S",
        vadi: "Madhyam (Ma)",
        samvadi: "Shadja (Sa)",
        niyaas: "Sa, Pa, Ma",
        anuvadi: "Ga, Dha, Ni",
        vivadi: "Tivra Ma (sparingly in special phrases)",
        microtones: "Dayawati (Re), Maddanti (Ga), Chhandowati (Ma), Ratta (Pa)"
    },
    {
        id: "gauri",
        name: "Gauri",
        gurmukhi: "ਗਉੜੀ",
        mood: "Serious, introspective, disciplined; encourages deep devotion and self-reflection.",
        aroh: "S R G M P D N S'",
        avroh: "S' N D P M G R S",
        vadi: "Rishabh (Re)",
        samvadi: "Pancham (Pa)",
        niyaas: "Sa, Re, Pa",
        anuvadi: "Ga, Ma, Dha, Ni",
        vivadi: "Komal Dha (in specific Gauri variants)",
        microtones: "Kshobhini, Swarini, Kuranti"
    },
    {
        id: "bilaval",
        name: "Bilaval",
        gurmukhi: "ਬਿਲਾਵਲ",
        mood: "Joyful, uplifting, radiating gratitude, happiness, and spiritual bliss.",
        aroh: "S R G M P D N S'",
        avroh: "S' N D P M G R S",
        vadi: "Dhaivat (Dha)",
        samvadi: "Gandhar (Ga)",
        niyaas: "Sa, Ga, Dha",
        anuvadi: "Re, Ma, Pa, Ni",
        vivadi: "Komal Ni (subtle ornamental usage)",
        microtones: "Maddanti, Preeti, Marjani"
    },
    {
        id: "ramkali",
        name: "Ramkali",
        gurmukhi: "ਰਾਮਕਲੀ",
        mood: "Calm, profoundly spiritual, meditative; subdues ego and detachment.",
        aroh: "S G M P N S'",
        avroh: "S' N D P M G R S",
        vadi: "Pancham (Pa)",
        samvadi: "Shadja (Sa)",
        niyaas: "Sa, Pa, Re",
        anuvadi: "Ga, Ma, Dha, Ni",
        vivadi: "Tivra Ma, Komal Dha",
        microtones: "Dayawati, Chhandowati, Ratta"
    },
    {
        id: "dhanasri",
        name: "Dhanasri",
        gurmukhi: "ਧਨਾਸਰੀ",
        mood: "Optimistic, fulfilled, combining deep longing with peaceful contentment.",
        aroh: "S G M P N S'",
        avroh: "S' N P M G R S",
        vadi: "Gandhar (Ga)",
        samvadi: "Nishad (Ni)",
        niyaas: "Sa, Ga, Pa",
        anuvadi: "Re, Ma",
        vivadi: "Dhaivat (omitted in Arohana)",
        microtones: "Ratta, Malini, Sandeepani"
    },
    {
        id: "sorath",
        name: "Sorath",
        gurmukhi: "ਸੋਰਠਿ",
        mood: "Reassuring, peaceful, affectionate; instills unwavering conviction and love.",
        aroh: "S R M P N S'",
        avroh: "S' n D P M R S",
        vadi: "Rishabh (Re)",
        samvadi: "Dhaivat (Dha)",
        niyaas: "Sa, Re, Pa",
        anuvadi: "Ma, Ni",
        vivadi: "Gandhar (subtle touch in descent)",
        microtones: "Dayawati, Maddanti, Chhandowati"
    },
    {
        id: "kalyan",
        name: "Kalyan",
        gurmukhi: "ਕਲਿਆਣ",
        mood: "Majestic, expansive, peaceful; invokes divine grace and reverence.",
        aroh: "S R G M' P D N S'",
        avroh: "S' N D P M' G R S",
        vadi: "Gandhar (Ga)",
        samvadi: "Nishad (Ni)",
        niyaas: "Sa, Ga, Pa",
        anuvadi: "Re, Tivra Ma, Dha",
        vivadi: "Shuddha Ma (rare, subtle ornamental use)",
        microtones: "Chhandowati, Ratta, Sandeepani"
    },
    {
        id: "sarang",
        name: "Sarang",
        gurmukhi: "ਸਾਰੰਗ",
        mood: "Refreshing, soothing, thirsting for spiritual union.",
        aroh: "S R M P N S'",
        avroh: "S' n P M R S",
        vadi: "Rishabh (Re)",
        samvadi: "Pancham (Pa)",
        niyaas: "Sa, Re, Pa",
        anuvadi: "Ma, Ni",
        vivadi: "Gandhar, Dhaivat",
        microtones: "Dayawati, Maddanti, Ratta"
    },
    {
        id: "suhi",
        name: "Suhi",
        gurmukhi: "ਸੂਹੀ",
        mood: "Devotional affection, passionate yearning, warm emotional intimacy.",
        aroh: "S R G M P N S'",
        avroh: "S' N P M G R S",
        vadi: "Pancham (Pa)",
        samvadi: "Shadja (Sa)",
        niyaas: "Sa, Pa, Ga",
        anuvadi: "Re, Ma, Ni",
        vivadi: "Dhaivat (sparingly used)",
        microtones: "Maddanti, Chhandowati, Preeti"
    },
    {
        id: "basant",
        name: "Basant",
        gurmukhi: "ਬਸੰਤੁ",
        mood: "Renewal, joy, spiritual blossoming and detachment from earthly care.",
        aroh: "S G M' D N S'",
        avroh: "S' N D P M' G R S",
        vadi: "Shadja (Sa)",
        samvadi: "Pancham (Pa)",
        niyaas: "Sa, Tivra Ma, Dha",
        anuvadi: "Ga, Ni",
        vivadi: "Rishabh (omitted in ascent)",
        microtones: "Ugra, Chhandowati, Sandeepani"
    },
    {
        id: "bhairo",
        name: "Bhairo",
        gurmukhi: "ਭੈਰਉ",
        mood: "Awe, solemn devotion, divine dignity, deep meditation.",
        aroh: "S r G M P d N S'",
        avroh: "S' N d P M G r S",
        vadi: "Dhaivat (Komal Dha)",
        samvadi: "Rishabh (Komal Re)",
        niyaas: "Sa, Komal Re, Komal Dha",
        anuvadi: "Ga, Ma, Pa, Ni",
        vivadi: "Shuddha Re, Shuddha Dha",
        microtones: "Kumudvati, Maddanti, Dayawati"
    },
    {
        id: "majh",
        name: "Majh",
        gurmukhi: "ਮਾਝ",
        mood: "Intense emotional longing, heartache for the Divine, sacred affection.",
        aroh: "S R M P D S'",
        avroh: "S' N D P M G R S",
        vadi: "Madhyam (Ma)",
        samvadi: "Shadja (Sa)",
        niyaas: "Sa, Ma, Dha",
        anuvadi: "Re, Ga, Pa, Ni",
        vivadi: "Komal Ni (subtle ornament)",
        microtones: "Dayawati, Maddanti, Chhandowati"
    },
    {
        id: "kanara",
        name: "Kanara",
        gurmukhi: "ਕਾਨੜਾ",
        mood: "Dignified, regal, praising divine grandeur with clarity.",
        aroh: "S R G M P d n S'",
        avroh: "S' n d P M G R S",
        vadi: "Pancham (Pa)",
        samvadi: "Rishabh (Re)",
        niyaas: "Sa, Re, Pa",
        anuvadi: "Ma, Komal Ga, Komal Ni",
        vivadi: "Shuddha Ga, Shuddha Ni",
        microtones: "Dayawati, Maddanti, Ratta"
    },
    {
        id: "prabhati",
        name: "Prabhati",
        gurmukhi: "ਪ੍ਰਭਾਤੀ",
        mood: "Dawn awakening, spiritual clarity, devotion at daybreak.",
        aroh: "S R G M P D N S'",
        avroh: "S' N D P M G R S",
        vadi: "Shadja (Sa)",
        samvadi: "Pancham (Pa)",
        niyaas: "Sa, Pa, Re",
        anuvadi: "Ga, Ma, Dha, Ni",
        vivadi: "Komal Re (in specific regional variations)",
        microtones: "Maddanti, Dayawati, Chhandowati"
    },
    {
        id: "jaijaiwanti",
        name: "Jaijaiwanti",
        gurmukhi: "ਜੈਜਾਵੰਤੀ",
        mood: "Noble, triumphant, majestic humility and deep emotional weight.",
        aroh: "S R g R M P N S'",
        avroh: "S' n D P D M G R S",
        vadi: "Rishabh (Re)",
        samvadi: "Pancham (Pa)",
        niyaas: "Sa, Re, Pa",
        anuvadi: "Ga, Ma, Dha, Ni",
        vivadi: "Shuddha Ga / Komal Ga interplay",
        microtones: "Dayawati, Maddanti, Chhandowati, Ratta"
    }
];