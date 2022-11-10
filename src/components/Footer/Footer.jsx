import React from 'react'
import { motion } from 'framer-motion';
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <motion.h2
          transition={{ duration: 1 }}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          >Join our<span className='text-gradient'> Socials</span></motion.h2>
      <motion.div 
        className='btn-container'
        transition={{ duration: 1 }}
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        >
        <a href="https://discord.gg/HcSXEw6NuJ"><button>Discord</button></a>
        <a href="https://twitter.com/WallofGains"><button>Twitter</button></a>
      </motion.div>
    </div>
    </>
  )
}

export default Footer