import React from 'react'
import { motion } from 'framer-motion';
import { people, payment } from '../../assets';
import './Membership.scss'

const Membership = () => {
  return (
    <>
    <motion.h2
      id='membership'
      transition={{ duration: 1 }}
      whileInView={{ y: [50, 0], opacity: [0, 1] }}
      className='membership-header'>The<span className='text-gradient'>Membership</span>
    </motion.h2>

    <div className='membership'>
        <motion.div 
            transition={{ duration: 1 }}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            className='row row-one'>
            
                <p>
                    What does the payment go to? The truth is, no one wants to work for free. 
                    and to be able to have the callers we have, 
                    get new callers as we grow, and keep them, 
                    we need to pay them.
                    <br />
                    <br />
                    The price is not set for us to profit from, it will be distributed 
                    to the callers, team, bots for the discord, 
                    and the rest will go to our community wallet. 
                    From this wallet we can buy NFTs to raffle out, 
                    money giveaways and what ever we want as a community.
                </p>
                <img className='members-png' src={people} alt="members png" />
            
        </motion.div>

        <div 
            className='row row-two'>
            <motion.img 
                transition={{ duration: 1 }}
                whileInView={{ y: [50, 0] }}
                className='payments-png' 
                src={payment} 
                alt="payments" />

            <motion.div
                transition={{ duration: 1 }}
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                >
                <p className='custom-width'>
                    We have several plans for you to choose from, and we use 
                    Discord payment bot for the service. This will give you 
                    access to the full serveer with the Alpha role after you 
                    have made the payment. The bot will send you a dm 72 hours 
                    before your plan runs out. If you don't make the next payment, 
                    you simply just lose your role.
                    <br />
                    <br />
                    You will also get a dashboard were you can view your currant 
                    plan, plans that are available, and how long before it runs out.
                    <br />
                    <br />
                    Every Premium member will have the opportunity to set up the 
                    affiliate program. Open a ticket in our discord and we will give 
                    you your personal code.
                    </p>

                    <a href="https://system.discordpaymentbot.com/subscribe?guild=939156059099131924">
                    <button>View Plans</button>
                    </a>
            </motion.div>
        </div>
    </div>
        {/* gradient start */}
        <motion.div 
            transition={{ duration: 1 }}
            whileInView={{ opacity: [0, 1] }}
            className="gradient-five position-five">
        </motion.div>
  </>
  )
}

export default Membership