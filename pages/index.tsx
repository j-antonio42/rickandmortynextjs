import Head from 'next/head'
import styles from  '../styles/Home.module.css';
import { Character, Info } from '@/types'
import { useEffect, useState } from 'react';
import Navigation from '@/pages/components/Navigation';
import CharacterCard from './components/CharacterCard';
import NavBar from './components/NavBar';
 
const Home = () => {

  const [pageNumber, setPageNumber] = useState<number>(1)

  const endPoint = `https://rickandmortyapi.com/api/character?page=${pageNumber}`

  const [characterInfo, setPosts] = useState<Character[]>([])
  const [info, setCharacterInfo] = useState<Info>({} as Info)
  

  const fetchData = async(endpoint : string) => {
    const res = await fetch(endpoint)
    const data = await res.json()
    setPosts( data.results )
    setCharacterInfo( data.info)
  }

  useEffect(() => {
    fetchData(endPoint)
  },[endPoint])


  return (
    <>
      <Head>
        <title>DO NOT DEVELOP MY APP</title>
      </Head>
      <main className='container'>
        <NavBar/>
      <Navigation 
            prevNextInfo = { info }
            setPageNumber={setPageNumber}
        />
        <h3 className={`font-monospace ${styles.chapterColors}`}>Characters:</h3>
       <section className={`row justify-content-center ${styles.characters}`}>
       { 
              characterInfo?.map( (character : Character) => {
                  return (
                     <CharacterCard 
                      uniqueId = { character.id}
                      key = { character.id }
                      character = { character }
                     />
                  )
              })}
       </section> 
       <Navigation 
            prevNextInfo = { info }
            setPageNumber={setPageNumber}
        />
      </main>
    </>
  )
}

export default Home

