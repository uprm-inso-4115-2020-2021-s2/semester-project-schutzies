import React, { useState, useEffect } from 'react'
import './Navbar.css'
import PlatealoLogo from '../../assets/platealo_logo_transparent.png'
// import { ReactComponent as PlatealoLogo } from '../../assets/platealo_logo_transparent.svg'
import Navlink from './Navlink'
import { Button } from 'react-bootstrap'

const Navbar = () => {
  return (
    <header>
      <section>
        <Navlink path='/'>
          <img className='nav__logo' src={PlatealoLogo} width='90' height='90' alt='Platealo Logo' />
        </Navlink>

      </section>
      <nav>
        <ul className='nav__links'>
          <li>
            <Navlink path='/'>
              About Us
            </Navlink>
          </li>
        </ul>
      </nav>
      {/* <Navlink path='/signin'>
          <Button>Sign In</Button>
        </Navlink> */}
      <Navlink path='/signup'>
        <Button variant='secondary'>Sign Up</Button>
      </Navlink>
    </header>
  )
}

export default Navbar
