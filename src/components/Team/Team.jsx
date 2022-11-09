import React from 'react'
import { motion } from 'framer-motion';
import { sim, cyberwolf, chase, nk, blick, larsen, twitter } from '../../assets';
import './Team.scss'

const founders = [
  { title: 'CryptoChris', description: 'Chris dev in training, works mostly behing the scene, taking care of the tech side of discord and the website. Finding collabs and building the communty', link: 'https://twitter.com/CryptoChrisSol', imgUrl: larsen},
  { title: 'NK', description: 'Crypto and NFT enthusiast, does everything from delivering profitable calls on Sol, collabs and building the server with and Amazing spirit!', link: 'https://twitter.com/7CryptoNk', imgUrl: nk},
  { title: 'Sim', description: 'Sim, our beloved discord and collab manager. he makes great collabs and wl giveaways for our members, and are always in chat helping out.', link: 'https://twitter.com/CryptoSim66', imgUrl: sim},
  { title: 'Chasemoney4life', description: 'Chase is a beast, he does this full time. He is on everything from sol and eth nfts, to futures. this guy is always hungry for profit, learning and growth', link: 'https://twitter.com/chasemoney4Iife', imgUrl: chase},
  { title: 'CyberWolfgr', description: 'Got a lot of experience with crypto, now having a great interest in NFTs aswell. has his own channel with crazy amount of free books and usefull content', link: 'https://twitter.com/CyberWolfgr', imgUrl: cyberwolf},
  { title: 'Stayin_Blick', description: 'Living and vibin in chat, helping everyone out when they have questions and showing them around. Also helps out with finding good projects and collabs ', link: 'https://twitter.com/crypto_blick', imgUrl: blick},
] 

const Team = () => {
  return (
    <>
    <motion.h2 
      transition={{ duration: 1 }}
      whileInView={{ y: [50, 0], opacity: [0, 1] }}
      className='team-header'>The<span className='text-gradient'>Team</span>
    </motion.h2>

      <div id='team'  className='team'>
        {founders.map((founder, index) => (

          <motion.div
            className='card-container'
            transition={{ duration: 1 }}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            key={founder.title + index}
          >
            <img src={founder.imgUrl} alt={founder.title} />
            <h3 className='text-gradient'>{founder.title}</h3>
            <p>{founder.description}</p>
            <a href={founder.link} rel="noreferrer" target="_blank"><img src={twitter} className='twitter-icon' alt="twitter" /></a>
          </motion.div>
        ))}
      </div>

        {/* gradient start */}
        <motion.div 
            transition={{ duration: 2 }}
            whileInView={{ opacity: [0, 1] }}
            className="gradient-three position-three">
        </motion.div>

        <motion.div 
            transition={{ duration: 2 }}
            whileInView={{ opacity: [0, 1] }}
            className="gradient-four position-four">
        </motion.div>
        {/* gradient end */}
    </>
  )
}

export default Team