import React, { useState, useEffect } from 'react'
import './Navbar.css'
import PlatealoLogo from '../../assets/platealo_logo_transparent.png'
// import { ReactComponent as PlatealoLogo } from '../../assets/platealo_logo_transparent.svg'
import Navlink from './Navlink'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

const NavbarView = () => {
  return (
    <Navbar>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-5">
          <Navlink path='/'>
            <img className='nav__logo' src={PlatealoLogo} width='90' height='90' alt='Platealo Logo' />
          </Navlink>
        </Nav>
        <Nav className='mr-5'>
          {/* <Navlink path="/aboutus">About Us</Navlink> */}
          <Navlink path='/signup'>
            <Button variant='secondary'>Sign Up</Button>
          </Navlink>
          <Navlink path='/signin'>
            <Button variant='secondary'>Sign In</Button>
          </Navlink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarView
