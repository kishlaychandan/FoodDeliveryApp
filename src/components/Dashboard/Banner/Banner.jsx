import React from 'react'
import style from "./Banner.module.css"
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <>
    <div className={style.banner}>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/032/028/929/small/spices-and-herbs-with-measuring-spoons-photo.jpg" alt="" />
      <Link to={"/menu"} className={style.menuLink}>Explore Menu</Link>
    </div>
    </>
  )
}

export default Banner