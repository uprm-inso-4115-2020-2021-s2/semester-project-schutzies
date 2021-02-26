import React,{useState} from 'react'
import './Signup.css'
import PlatealoLogo from '../../assets/platealo_logo_transparent.png'
import PlatealoBackgroundImg from '../../assets/platealo_background.jpg'

const Signup = () => {
  const [username, setUsername] = useState('');
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  

  /*
  Kevins recommendation:
  -Utilizar 4 usestate 
  -4 funciones handle user/pass change etc cogen event param
  - Event - user type, take that value and put in setState .target.value
  -setState - changes the useState

  
  
  */
  return (
    <div className='signup'>
      <div className='signup__left'>
        <form className='form' onSubmit={handleSubmit}> 
          <h1>Create your account</h1>
          <div className='form-inputs'>
            <label htmlFor='username' className = 'form-label'>
                  <input 
                  type = 'text'
                  name='username'
                  className = 'form-input'
                  placeholder = 'Username'/>
            </label>
          </div>
          <div className='form-inputs'>
              <label htmlFor='email' className = 'form-label'>
                    <input 
                    type = 'email'
                    name='email'
                    className = 'form-input'
                    placeholder = 'Email'/>
              </label>
          </div>
          <div className='form-inputs'>
              <label htmlFor='password' className = 'form-label'>
                    <input 
                    type = 'password'
                    name='password'
                    className = 'form-input'
                    placeholder = 'Password'/>
              </label>
          </div>
          <div className='form-inputs'>
              <label htmlFor='confirm password' className = 'form-label'>
                    <input 
                    type = 'password'
                    name='confirm password'
                    className = 'form-input'
                    placeholder = 'Confirm Password'/>
              </label>
          </div>
          <div>
            <button className="form-input-btn" type='submit'>
              Sign up
            </button>
          </div>
          <div>
            <span className='form-input-login'>
              Already have an account? <a href='Signin'>Sign In</a>
            </span>
          </div>
          
        </form>
      </div>
      <div className='signup__right'>
        <img className='signup__backImg' src={PlatealoBackgroundImg} />
        <img className='signup__logo' src={PlatealoLogo} width='500' height='500' alt='Platealo Logo' />
      </div>
    </div>
  )
}

export default Signup
