import React from 'react'
import style from './Faq.module.css'
import Navbar from '../Navbar/Navbar'
function Faq() {
  return (
    <>
    <Navbar />
    <div className={style.faq}>
        <h1>Frequently Asked Questions</h1>
    </div>
    </>
  )
}

export default Faq