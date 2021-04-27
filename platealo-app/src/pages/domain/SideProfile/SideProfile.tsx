import React from 'react'
import './SideProfile.css'
import PlatealoLogo from '../../../assets/platealo_logo_transparent.png'
import Navlink from '../../../components/Navbar/Navlink'

const SideProfile = () => {
  return (
    <div className='sideProfile'>
      {/* <h2>Side Profile Component</h2> */}
      <div className='sideProfile__centering'>
        <Navlink path='/'>
          <img className='sideProfile__logo' src={PlatealoLogo} width='120' height='120' alt='Platealo Logo' />
        </Navlink>
      </div>
    </div>
  )
}

export default SideProfile
