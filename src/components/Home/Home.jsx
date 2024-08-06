// Home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import anime from "animejs";
import ChatBots from "../ChatBot/ChatBots";
function Home() {
  useEffect(() => {
    const createParticles = () => {
      const numParticles = 50;
      const container = document.getElementById('background-animation');

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = style.particle;
        container.appendChild(particle);

        const size = Math.random() * 10 + 5;
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        const color = ['#5cb85c', '#4cae4c', '#008cba', '#0056b3'][Math.floor(Math.random() * 4)];

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${initialX}px`;
        particle.style.top = `${initialY}px`;

        anime({
          targets: particle,
          translateX: [
            { value: () => `+=${Math.random() * 200 - 100}`, easing: 'linear' },
            { value: () => `+=${Math.random() * 200 - 100}`, easing: 'linear' }
          ],
          translateY: [
            { value: () => `+=${Math.random() * 200 - 100}`, easing: 'linear' },
            { value: () => `+=${Math.random() * 200 - 100}`, easing: 'linear' }
          ],
          opacity: [
            { value: 1 },
            { value: 0, duration: 1500, delay: 200, easing: 'easeOutQuad' }
          ],
          duration: () => Math.random() * 5000 + 2000,
          loop: true,
          easing: 'linear'
        });
      }
    };

    createParticles();
  }, []);

  return (
    <>
      {/* <ChatBots /> */}
      <div className={style.hnav}>
        <div className={style.left}>
          <Link to="/">LOGO</Link>
        </div>
        <div className={style.right}>
          <Link to="/signup">SIGNUP</Link>
          <Link to="/signin">LOGIN</Link>
        </div>
      </div>
      <div className={style.home}>
        <div id="background-animation" className={style.backgroundAnimation}></div>
        <div className={style.img}>
          <img
            src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/e0fea58b-e900-4550-ac52-5a0e1eff847f.png"
            alt=""
          />
        </div>
        <div className={style.Des}>
          <h1>Welcome to KC's Kitchen</h1>
          <p className={style.description}>
            Enjoy a variety of delicious dishes made from fresh ingredients. Our
            kitchen serves everything from mouth-watering appetizers to
            delectable desserts.
          </p>
          <ul className={style.highlights}>
            <li>Freshly prepared daily</li>
            <li>Varied menu options</li>
            <li>Exceptional customer service</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
