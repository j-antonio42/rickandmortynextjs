import { Character } from '@/types';
import Link from 'next/link';
import styles from  '../../styles/Home.module.css';

interface CharacterPropsInfo {
  character: Character;
  uniqueId: React.Key;
}

const CharacterCard = ({ character, uniqueId } : CharacterPropsInfo) => {

    const { id, name, image, species, origin } = character;

  return (
    <article className={`col-12 col-sm-4 col-md-3 col-lg-2 font-monospace ${styles.character}`} key={uniqueId} >
    <img src={image} className="card-img-top"  alt={name}/>
    <div className={styles['character-body']}>
        <h5 className="mt-2">{name}</h5>
        <p className={styles.text}>species: {species}</p>
        <p className={styles.text}>origin: {origin.name}</p>
        <Link href={'/character/[id]'} as={`/character/${id}`}>
        <button  className={`btn ${styles['character-body-btn']}`}>More info</button>
        </Link>
        </div>
    </article>
  )
}

export default CharacterCard