import React from 'react'
import { motion } from 'framer-motion';
import { wave, etherimg } from '../../assets';
import './About.scss'

const About = () => {
  return (
    <>
      <motion.div 
        id='about' 
        className='about'
        transition={{ duration: 1 }}
        whileInView={{ opacity: [0, 1] }}
        >

        <motion.div
          transition={{ duration: 1 }}
          whileInView={{ y: [150, 0], opacity: [0, 1] }}
          >
            <h2>Place to <span className='text-gradient'>Learn</span></h2>
            <p>We are a private server welcoming everyone, from people new to 
              the space, to experience traders, we want to make this the best 
              server to learn everything at ease and at the same time make 
              money and best of all the skills to one day live the good life 
              of financial freedom. We aim to provide convicted calls for 
              everyone!
            </p>
            <p>
            <br />
            We have proof of our calls & proof of members benefitting from them. 
            Our team work hard to continuously build a community which is friendly, 
            welcoming and profitable. We aim to be a safe & fun community which all 
            crypto traders can call home and feel like they belong.
            </p>
        </motion.div>

        <motion.div 
          className='img-conteiner'
          transition={{ duration: 1 }}
          whileInView={{ y: [150, 0], opacity: [0, 1] }}
          >
            <img src={etherimg} alt="crypto" />
        </motion.div>
      </motion.div>

      <motion.img 
        src={wave} 
        alt="wave devider" 
        className='wave'
        transition={{ duration: 2 }}
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        />
    </>
  )
}

export default About