import style from "./Home.module.css";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <div className={style.hnav}>
        <div className={style.left}>
          <Link to="/">LOGO</Link>
        </div>
        <div className={style.right}>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        </div>
      </div>
      <div className={style.home}>
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
            <li>`Freshly prepared daily`</li>
            <li>`Varied menu options`</li>
            <li>`Exceptional customer service`</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
