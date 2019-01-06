import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
  <div className='spacer'>
    <div className='about'>
      <h1>Base64</h1>
    </div>
    <div className='spacer'>{`  `}</div>
    <div className='aboutbody'>
      <h3>
        Base64 is a somewhat simple encoding that allows transfer of binary data
        over mediums that can only parse printable characters. One of the first
        implementations was to allow computers with the same OS communicate over
        a dial-up connection. Today it is still heavily used in E-mail MIME
        protocol and when transferring binary data across networks. However, a
        new use for it has recently emerged across Reddit; a way to encode links
        to prevent them from being mapped and removed by bot moderators and nosy
        corporations.
      </h3>
    </div>
  </div>
)
export default About
