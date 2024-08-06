import React from 'react'
import style from './Faq.module.css'
import Navbar from '../Navbar/Navbar'
import FloatingForm from '../FloatingForm/FloatingForm'
import ChatBots from '../ChatBot/ChatBots';
function Faq() {
  return (
    <>
    <Navbar />
    <FloatingForm />
    <ChatBots />
    <div className={style.faq}>
        <h1>Frequently Asked Questions</h1>
    </div>
    </>
  )
}

export default Faq