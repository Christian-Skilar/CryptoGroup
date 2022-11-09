import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <h2>Join our<span className='text-gradient'> Socials</span></h2>
      <div className='btn-container'>
        <a href="https://twitter.com/home"><button>Discord</button></a>
        <a href="https://twitter.com/home"><button>Twitter</button></a>
      </div>
    </div>
    </>
  )
}

export default Footer