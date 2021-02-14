import React, { useState } from 'react'
import './Navbar.css'
import PlatealoLogo from '../../assets/platealo_logo.jpeg'
import { Button } from 'react-bootstrap'

const Navbar = () => {
  const [user, setUser] = useState('');

  return (
    <div className='nav'>
      <header>
        <img className='nav__logo' src={PlatealoLogo} height='100' width='100' alt='Platealo Logo' />
        <nav>
          <ul className='nav__links'>
            <li><a href='#'>About Us</a></li>
          </ul>
        </nav>
        <Button>Sign In</Button>
        <Button variant='secondary'>Sign Up</Button>
      </header>
    </div>
  )
}

export default Navbar
