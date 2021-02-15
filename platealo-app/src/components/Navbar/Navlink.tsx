import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navlink.css'

const Navlink = ({ children, path, onClick }: any) => (
  <NavLink exact to={path}
    // className={`
    //   nav-link
    //   text-hover${checkHoverText()}
    //   nav-link${checkLinkText()}
    // `}
    onClick={onClick}
  >
    {children}
  </NavLink>
)

export default Navlink
