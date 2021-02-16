import React from 'react'
import './Signup.css'
import PlatealoLogo from '../../assets/platealo_logo_transparent.png'
import PlatealoBackgroundImg from '../../assets/platealo_background.jpg'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup__left'>
        Signup Form
      </div>
      <div className='signup__right'>
        <img className='signup__backImg' src={PlatealoBackgroundImg} />
        <img className='signup__logo' src={PlatealoLogo} width='250' height='250' alt='Platealo Logo' />
      </div>
    </div>
  )
}

export default Signup
