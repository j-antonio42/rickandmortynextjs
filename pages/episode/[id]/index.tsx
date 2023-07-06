import CharacterCard from "@/pages/components/CharacterCard";
import NavBar from "@/pages/components/NavBar";
import { Character, Episode } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import styles from  '../../../styles/Home.module.css';

const EpisodeDetail = () => {

const episodeEndpoint = 'https://rickandmortyapi.com/api/episode';
const router = useRouter();
const episodeId = router.query.id;
const [chapter, setChapter] = useState<Episode | null>(null);
const [characterInfo, setCharacterInfo ] = useState<Character[] | null >(null);

const fetchEpisode = async (params: string) => {
const res = await fetch(params);
const data: Episode = await res.json();
setChapter(data);

const fetchedCharacters = await Promise.all(
    data.characters.map( async ( character ) => {
        const res = await fetch( character);
        const characterData = await res.json();
        return characterData
    })
)
setCharacterInfo(fetchedCharacters)
};

useEffect(() => {
    if (episodeId) {
        fetchEpisode(`${episodeEndpoint}/${episodeId}`);
    }
}, [episodeId]);

if (!chapter) {
    return <h1 className="font-monospace">Loading</h1>;
  }

const { episode, name, air_date, } = chapter

return (
    <main>
        <NavBar />
    <section className='container'>
        <article className={`font-monospace mt-4 `}>
            <div className={`row ${styles.characters}`}>
            <h1 className={styles.chapterColors}>{`${episode}: ${name}`}</h1>
            <h2 className={styles.chapterColors}>{`Air date: ${air_date}`}</h2>
            <h3 className={styles.chapterColors}>Characters:</h3>
                {
                    characterInfo?.map( (character : Character) => {
                        return (
                        <CharacterCard 
                            uniqueId = { character.id}
                            key = { character.id }
                            character = { character }
                        />
                        )
                    })
                }
            </div>
        </article>
    </section>
  </main>
  )
}

export default EpisodeDetail