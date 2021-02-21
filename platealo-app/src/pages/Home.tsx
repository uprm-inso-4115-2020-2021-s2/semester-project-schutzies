import React from 'react'
import './Home.css'
import PlatealoBackgroundImg from '../assets/platealo_background.jpg'
import Navlink from '../components/Navbar/Navlink'
import Navbar from '../components/Navbar/Navbar'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='home__hero'>
        <img src={PlatealoBackgroundImg} alt='Photo by Ella Olsson from Pexels' />
        <div className='home__centered'>
          <div className='home__content'>
            <h1>Not sure what to <span className='home__cook'>COOK</span>?</h1>
            <p>Find your ideal <span className='home__recipe'>RECIPE</span> with what you have at home</p>
            <Navlink path='/app'>
              <Button>Let's Cook!</Button>
            </Navlink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
