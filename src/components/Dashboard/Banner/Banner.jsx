import React from 'react'
import style from "./Banner.module.css"
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <>
    <div className={style.banner}>
      <Link to={"/menu"} className={style.menuLink}>Explore Menu</Link>
    </div>
    </>
  )
}

export default Banner