import React, { useState } from 'react'
import style from './Faq.module.css'
import Navbar from '../Navbar/Navbar'
import FloatingForm from '../FloatingForm/FloatingForm'
import ChatBots from '../ChatBot/ChatBots';
import Footer from '../Footer/Footer'
function Faq() {
  const [question,setQuestions] = useState([
    {
      quest: "What is your delivery fee?",
      answer: "Your delivery fee is $5.00.",
      toogleState: false
    },
    {
      quest: "How do I track my order?",
      answer: "You can track your order by logging into your account on our website.",
      toogleState: false
    },
    {
      quest: "Can I cancel my order?",
      answer: "You can cancel your order by logging into your account on our website.",
      toogleState: false
    },
    {
      quest: "What payment methods do you accept?",
      answer: "We accept PayPal, Credit Card, and Cash on Delivery.",
      toogleState: false
    }
  ]);

  const openClose =(index)=>{
    let newQuestions = [...question];
    let ans=newQuestions.map((item,i)=>{
      if(i===index){
        return {...item,toogleState:!item.toogleState}
      }
      else{
        return item;
      }
    })
    setQuestions(ans);
  }

  return (
    <>
    <Navbar />
    <FloatingForm />
    <ChatBots />
    <div className={style.faq}>
        <div className={style.faqQuestion}>
            <div className={style.title}>
            <h1>Frequently Asked Questions</h1>
            <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            
            </div>
            {question.map((item,index)=>{
              return (
                <>
                <div className={style.card} key={index} onClick={()=>{openClose(index)}}>
                  <h1>{(item.toogleState)? ">":"v"} {item.quest}</h1>
                  <p>{(item.toogleState)? item.answer:null}</p>
                </div>
                </>
              )
            })}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Faq