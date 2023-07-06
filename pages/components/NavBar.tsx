import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const style = {
        width: '250px'
    }

    const glootie = {
        width: '75px',
        borderRadius: '100%',
        marginRight:'0.5rem'
    }
  return (
    <ul className="nav justify-content-around">
       <div className="d-flex justify-content-center align-items-center">
        <Link href={'/character/525'} as={'/character/525'}>
        <img 
        className='mt-3'
        style={glootie}
        src='https://rickandmortyapi.com/api/character/avatar/525.jpeg'
        alt='Do you want to develop an app?'
        />
        </Link>
        <p className="font-monospace mb-0 mt-2 text-white d-none d-md-block">Do you want to develop an app?</p>
        </div>
        <Link href={'/'} as={'/'}>
        <img 
        className='mt-3'
        style={style}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png'
        alt='wubba lobba dub dub'
        />
        </Link>
    </ul>
  )
}

export default NavBar