import React from "react";
import style from "./FloatingForm.module.css";

function FloatingForm() {
  return (
    <>
      <div className={style.contactContainer}>
        <div className={style.contactButton}>CONTACT US 📞</div>
        <div className={style.contactFormContainer}>
          <form id="contact-form" action="" method="POST">
            <div className={style.wpformsFieldContainer}>
              <div
                id="wpforms-1721-field_1-container"
                className={`${style.wpformsField} ${style.wpformsFieldText}`}
              >
                <label htmlFor="wpforms-1721-field_1">Name</label>
                <input
                  type="text"
                  id="wpforms-1721-field_1"
                  name="name"
                  required
                />
              </div>
              <div
                id="wpforms-1721-field_2-container"
                className={`${style.wpformsField} ${style.wpformsFieldEmail}`}
              >
                <label htmlFor="wpforms-1721-field_2">Email</label>
                <input
                  type="email"
                  id="wpforms-1721-field_2"
                  name="email"
                  required
                />
              </div>
              <div
                id="wpforms-1721-field_3-container"
                className={`${style.wpformsField} ${style.wpformsFieldText}`}
              >
                <label htmlFor="wpforms-1721-field_3">Subject</label>
                <input
                  type="text"
                  id="wpforms-1721-field_3"
                  name="subject"
                  required
                />
              </div>
              <div
                id="wpforms-1721-field_4-container"
                className={`${style.wpformsField} ${style.wpformsFieldTextarea}`}
              >
                <label htmlFor="wpforms-1721-field_4">Message</label>
                <textarea
                  id="wpforms-1721-field_4"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className={style.wpformsSubmitContainer}>
                <button type="submit" id="wpforms-submit-1721">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FloatingForm;
