import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className='base64'>
    <div className='logo'>
      <img src='logo.png' className='heart' />
      <img src='logotext.png' className='text' />
    </div>
    <div className='spacer'>
      <Link to='/' className='link'>
        <h3>Home</h3>
      </Link>
      <Link to='/history' className='link'>
        <h3>Log</h3>
      </Link>
      <Link to='/about' className='link'>
        <h3>About base64</h3>
      </Link>
    </div>
  </div>
)
export default Navbar
