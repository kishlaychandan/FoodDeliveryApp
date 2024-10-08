import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Menu.module.css'
import FloatingForm from '../FloatingForm/FloatingForm'
import ChatBots from '../ChatBot/ChatBots';
import Footer from '../Footer/Footer';
// import data from '../data'
function Menu({data}) {
  return (
    <>
    <Navbar/>
    <ChatBots/>
    <FloatingForm />
    <div className={style.menu}>
      <h1>Menu</h1>

      <div className={style.cards}>
        {
          data.map((item) => {
            return (
              <div className={style.card}>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Menu