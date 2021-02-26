import React from 'react'
import './Sidebar.css'
import Navlink from '../../../components/Navbar/Navlink'

const Sidebar = (props: any) => {
  console.log('side props', props)
  // console.log('match url', url)
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Navlink path={`app/search-recipes`}>
            {/* <Navlink path={`${url}/search-recipes`}> */}
            Search Recipes Component
          </Navlink>
        </li>
        <li>
          <Navlink path={`app/byingredient`}>
            {/* <Navlink path={`${url}/byingredient`}> */}
            By Ingredient
          </Navlink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
