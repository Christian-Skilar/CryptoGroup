import React from 'react'
import { motion } from 'framer-motion';
import { rocket } from '../../assets';
import './Header.scss'


const Header = () => {
  return (
    <>         
      <div id='home' className='header'>
        <motion.div 
          className='header-text-container'
          transition={{ duration: 1 }}
          whileInView={{ x: [-150, 0], opacity: [0, 1] }}
          >
            <h1>Wall of <span className='text-gradient'>Gains</span></h1>
            <p>Our Alpha group provides Education on SOL & ETH NFTs, as 
              well as trading Futures. We have dedicated callers for Futures, 
              SOL NFTs, ETH NFTs and sport bets.
            </p>
            <p>
              <br />
              If you are new, then this is a great server to start your NFT/Crypto journey. 
              We all know what it's like coming in to this space it's a lot 
              to take in and it can be overwhelming! Everyone 
              is kind and helpful so dont be afraid to join the conversation 
              it's the best way to learn.
            </p>
            <a href="https://twitter.com/WallofGains">
            <button>Join Now</button>
            </a>
          </motion.div>

          <motion.img 
            transition={{ duration: 2 }}
            whileInView={{ opacity: [0, 1] }}
            src={rocket} 
            alt="rocket" 
            className='header-rocket'
            />
      </div>

        {/* gradient start */}
        <motion.div 
            transition={{ duration: 2 }}
            whileInView={{ opacity: [0, 1] }}
            className="gradient-one position-one">
        </motion.div>

        <motion.div 
            transition={{ duration: 2 }}
            whileInView={{ opacity: [0, 1] }}
            className="gradient-two position-two">
        </motion.div>
        {/* gradient end */}

        <div className='selling-points'>
          <motion.div
            transition={{ duration: 0.5 }}
            whileInView={{ y: [60, 0], opacity: [0, 1] }}
            >
            <p>16<span>Dedicated Callers</span></p>
          </motion.div>

          <motion.div
            transition={{ duration: 0.8 }}
            whileInView={{ y: [80, 0], opacity: [0, 1] }}
            >
            <p>5+<span>Income Streams</span></p>
          </motion.div>

          <motion.div
            transition={{ duration: 1.1 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            >
            <p>300+<span>Friendly Members</span></p>
          </motion.div>
        </div>

    </>
  )
}

export default Header














