import React from 'react'
import { motion } from 'framer-motion';
import { solana, candlestick, sports, ethereum, wave2, callerchart } from '../../assets';
import './Callers.scss'

const Member = () => {
  return (

    <>
      <motion.h2
        transition={{ duration: 1 }}
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        className='callers-header'>Our<span className='text-gradient'>Callers</span>
      </motion.h2>

      <div id='callers'  className='member'>
        <motion.img 
          transition={{ duration: 1 }}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          className='callers-chart' 
          src={callerchart} 
          alt="callers chart png" 
        />

        <div className='chain-col'>
          <motion.div 
            transition={{ duration: 1 }}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            className='chain-row'>
            <img src={ethereum} alt="ethereum" />
            <p>3 ETH NFT callers, these guys are experienced and have 
              a good understanding about the market and knows well what to look 
              for in a project. ofc we always want you to do your own research as well.
            </p>
          </motion.div>
          <motion.div 
            transition={{ duration: 1 }}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            className='chain-row'>
            <img src={solana} alt="solana" />
            <p>There are 7 caller making calls for Solana NFTs. 
              Experienced people that have 
              a good understanding about the market and knows well what to look 
              for in a project. ofc we always want you to do your own research as well.
            </p>
          </motion.div>
          <motion.div 
            transition={{ duration: 1 }}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            className='chain-row'>
            <img src={sports} alt="sports" />
            <p>Sports bets is getting more and more populare, and we have 1 guy that 
              makes calls on different sport events like fotball, baseball, tennis and 
              more
            </p>
          </motion.div>
          <motion.div 
            transition={{ duration: 1 }}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            className='chain-row'>
            <img src={candlestick} alt="candlestick" />
            <p>Along with Sol nfts this is our most populare section and most profitable one.
              learning this skills can make you a lot of money. we have 5 people making
              calls on futures and teaching you different tequnices
            </p>
          </motion.div>
        </div>
      </div>

      <motion.img 
        transition={{ duration: 1 }}
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        className='wavetwo' 
        src={wave2} 
        alt="wave devider" />
    </>
  )
}

export default Member