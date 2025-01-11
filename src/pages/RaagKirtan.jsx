import React from "react";
import { Link } from "react-router-dom";

function RaagKirtan() {
    return (
        <div className="container">
            <h2>Raag Kirtan</h2>
            <section>
                <h3>History of Raag Kirtan</h3>
                <p>
                    Raag Kirtan is a traditional form of Sikh devotional music that has been practiced for centuries. It is based on the principles of Indian classical music and is performed in specific ragas (melodic frameworks) that are prescribed in the Guru Granth Sahib, the holy scripture of Sikhism. The tradition of Raag Kirtan was established by the Sikh Gurus, who composed hymns in various ragas to convey spiritual messages and teachings.
                </p>
                <p>
                    The practice of Raag Kirtan has been preserved and passed down through generations of musicians and scholars. It is an integral part of Sikh worship and is performed in gurdwaras (Sikh temples) around the world. The music is characterized by its melodic beauty, rhythmic complexity, and deep spiritual significance.
                </p>
            </section>
            <section>
                <h3>Technical Details of Raag Kirtan</h3>
                <p>
                    Raag Kirtan is performed using a variety of traditional Indian musical instruments, including the harmonium, tabla, dilruba, and tanpura. Each raga has its own unique set of notes, mood, and rules for improvisation. The performance typically begins with an alap, a slow and meditative introduction that explores the key notes and mood of the raga. This is followed by the bandish, a fixed composition that serves as the main theme for improvisation.
                </p>
                <p>
                    The rhythmic aspect of Raag Kirtan is governed by taal, a cyclic pattern of beats that provides the framework for the music. Common taals used in Raag Kirtan include teentaal (16 beats), ektaal (12 beats), and jhaptaal (10 beats). The tabla player provides the rhythmic accompaniment, while the harmonium and other melodic instruments support the vocalist.
                </p>
                <p>
                    Improvisation is a key element of Raag Kirtan, allowing the performer to express their creativity and devotion. The musician may explore different melodic phrases, rhythmic patterns, and ornamentations within the framework of the raga and taal. This dynamic interplay between fixed composition and improvisation creates a rich and engaging musical experience.
                </p>
            </section>
            <section>
                <h3>Significance of Raag Kirtan</h3>
                <p>
                    Raag Kirtan holds a special place in Sikh worship and spirituality. It is believed to have the power to elevate the soul, bring inner peace, and connect the listener with the divine. The music is not just an artistic expression, but a form of meditation and devotion that transcends the material world.
                </p>
                <p>
                    The Sikh Gurus emphasized the importance of music in spiritual practice, and their compositions in the Guru Granth Sahib are a testament to this belief. Raag Kirtan continues to inspire and uplift the Sikh community, fostering a sense of unity, devotion, and reverence for the teachings of the Gurus.
                </p>
            </section>

            <section>
                <h3>Experimental projection animation for Raag</h3>
                <p>This a demo example of a fullscreen projection that can be use in divaans while playing simran in raag.
                    The image reflects the emotional signature of the raag with some explanation overlayed</p>
                <Link to="/raag-asa">Watch Raag Asa Video</Link>
            </section>
        </div>
    );
}

export default RaagKirtan;
