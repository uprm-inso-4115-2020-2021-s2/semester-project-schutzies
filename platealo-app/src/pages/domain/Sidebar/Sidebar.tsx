import React from 'react'
import './Sidebar.css'
import Navlink from '../../../components/Navbar/Navlink'

const Sidebar = ({ url }: any) => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Navlink path={`${url}/search-recipes`}>
            Search Recipes Component
          </Navlink>
        </li>
        <li>
          <Navlink path={`${url}/byingredient`}>
            By Ingredient
          </Navlink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
