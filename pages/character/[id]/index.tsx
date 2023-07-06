import NavBar from "@/pages/components/NavBar";
import { Character } from "@/types"
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '../../../styles/character.module.css'

const CharacterDetail = () => {

  const characterEndpoint = 'https://rickandmortyapi.com/api/character';
  const router = useRouter();
  const characterId = router.query.id;
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes ] = useState(false)

  const fetchCharacter = async (params: string) => {
    const res = await fetch(params);
    const data = await res.json();
    setCharacter(data);
  };

  useEffect(() => {
    if (characterId) {
      fetchCharacter(`${characterEndpoint}/${characterId}`);
    }
  }, [characterId]);

  if (!character) {
    return <h1 className="font-monospace">Loading</h1>;
  }

  const episodesHandler = () => {
    setEpisodes(!episodes)
  }

  const goBackHandler = () => {
    router.back()
  }

  const { image, name, species, origin, gender, location, status, episode } = character;

  return (
    <main>
      <NavBar/>
      <section className='container'>
        <article className={`font-monospace mt-4 ${styles.detail}`}>
          <div className={`${styles.characterWrapper}`}>
            <img src={image} className={`card-img-top ${styles.picture}`} alt={name} />
            <div className={styles.info}>
              <h5 >{name}</h5>
              <p>species: {species}</p>
              <p>origin: {origin.name}</p>
              <p>gender: {gender}</p>
              <p>location: {location.name}</p>
              <p>status: {status}</p>
              <button className={`btn ${styles.back}`} onClick={goBackHandler}> GO BACK </button>
              <button className={`btn ${styles.back}`} onClick={episodesHandler}> EPISODES </button>
            </div>
          </div>
          <div>
              {episodes && (
                <ul className={`mt-3 ${styles.episodeList}`}>
                  {episode.map((chapter) => {
                    const chapterText = chapter.slice(32);
                    return (
                      <Link key={chapterText} className={styles.episodeLink} href="/episode/[id]" as={`/${chapterText}`}>
                        <li>{chapterText}</li>
                      </Link>
                    );
                  })}
                </ul>
              )}
            </div>




        </article>
       
      </section>
    </main>
  );
};

export default CharacterDetail