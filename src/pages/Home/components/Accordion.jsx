/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'
import icon__ball from '../../../assets/images/home/ball.png'
import icon__arrow from '../../../assets/images/home/icon_active.png'
import './accordion.css'
const Accordion = () => {
  const faqs = [
    {
      question: 'What is Azur Decentralized Exchange or AzurSwap?',
      answer:
        'The concept of a decentralized cryptocurrency exchange has been created to give an objective expression to the concept of decentralization of cryptocurrencies in order to increase the security of users. Decentralized exchanges are developed using smart contracts.The codes of these exchanges are accessible to everyone. Everyone can see how these exchanges work',
      icon: icon__ball,
      iconActive: icon__arrow
    },
    {
      question: 'What is the name of the AzurSwap governance token?',
      answer:
        "AzurSwap's sovereign token will be announced as Azur Token with symbol AZUR after its official release on Azur social networks. By using this token, there are special buying and selling capabilities in the AzurVerse world",
      icon: icon__ball,
      iconActive: icon__arrow
    },
    {
      question: 'How is the AzurSwap telegram bot?',
      answer:
        'Telegram bot is designed to report real-time price and has various features and is now available for free.',
      icon: icon__ball,
      iconActive: icon__arrow
    }
  ]
  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  )
}

export default Accordion
