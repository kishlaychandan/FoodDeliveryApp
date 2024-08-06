import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className={styles.Footer}>
            <div className={styles.Footer1}>
                <h1>(+91) 9631808818</h1>
                <p>Bengaluru, Karnataka, India, 560083</p>
            </div>
            <div className={styles.Footer2}>
                <p>Monday - Thursday: 10AM - 9PM</p>
                <p>Friday - Saturday: 9AM - 9PM</p>
                <p>Sunday: Close</p>
            </div>
            <div className={styles.Footer3}>
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitter />
            </div>
        </div>
    </>
  )
}

export default Footer