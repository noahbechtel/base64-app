import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className='base64'>
    <div className='logo'>
      <img src='logo.png' className='heart' />
      <img src='logotext.png' className='text' />
    </div>

    <Link to='/history' className='link'>
      <h3>Log</h3>
    </Link>
    <Link to='/' className='link'>
      <h3>Home</h3>
    </Link>
  </div>
)
export default Navbar
