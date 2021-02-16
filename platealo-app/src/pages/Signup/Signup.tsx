import React from 'react'
import './Signup.css'
import PlatealoLogo from '../../assets/platealo_logo_transparent.png'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup__left'>
        SUP
      </div>
      <div className='signup__right'>
        <div className='signup__logo'>
          <img src={PlatealoLogo} width='200' height='200' alt='Platealo Logo' />
        </div>
      </div>
    </div>
  )
}

export default Signup
