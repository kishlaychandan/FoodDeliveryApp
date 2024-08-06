import React, { useContext, useState, useEffect } from "react";
import style from "./Signin.module.css";
import AuthContext from '../../AuthContext';
import { Link } from "react-router-dom";
import anime from "animejs";
import bg from '../../assets/kc-removebg-preview.png'

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const createParticles = () => {
      const numParticles = 50;
      const container = document.getElementById('background-animation');

      container.innerHTML = '';

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

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <>
      <div className={style.nav}>
        <div className={style.left}>
          <Link to="/"><img src={bg} alt="" /></Link>
        </div>
        <div className={style.right}>
          <Link to="/signup">SIGNUP</Link>
          <Link to="/signin">LOGIN</Link>
        </div>
      </div>
      <div className={style.formContainer}>
        <div id="background-animation" className={style.backgroundAnimation}></div>
        <div className={style.formWrapper}>
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
