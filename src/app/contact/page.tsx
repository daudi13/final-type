"use client"
import React, {useState} from 'react'
import style from '../styles/Contact.module.scss';
import Image from 'next/image';

const ContactPage = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  console.log(firstName)


  return (
    <main>
      <div className={style.heroSection}>
        <div className={style.personVector}>
          <Image fill className={style.img} src='/personquart.png' alt="header vectors"/>
        </div>
        <div className={style.quartVector}>
          <Image fill className={style.img} src='/blueEllipse.png' alt="header vectors"/>
        </div>
        <div className={style.rectVector}>
          <Image fill className={style.img} src='/rect01.png' alt="header vectors"/>
        </div>
        <div className={style.girlVector}>
          <Image fill className={style.img} src='/girlfull.png' alt="header vectors"/>
        </div>
        <div className={style.circleVector}>
          <Image fill className={style.circleVector} src='/circle.png' alt="header vectors" />
        </div>
        <div className={style.heroText}>
          <div className={style.groupCover}>
            <Image fill src='/group122.png' alt="group12" className={style.heroGroupVector} />
          </div>
          <h2 className={style.heroHeader}>Contact us</h2>
        </div>
      </div>
      <div className={style.contactFormWrapper}>
        <form className={style.contactForm}>
          <div className={style.contactFormColumnRight}>
            <h2 className={style.contactFormHeader}>We&apos;d love to hear from you!</h2>
            <div className={style.underline} />
            <div className={style.mainForm}>
              <div className={style.mainFormName}>
                <div className={style.inputBoxWrapper}>
                  <label className={style.inputLabel} htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className={style.inputBox}
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={style.inputBoxWrapper}>
                <label className={style.inputLabel} htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className={style.inputBox}
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className={style.inputBoxWrapper}>
              <label className={style.inputLabel} htmlFor="email">Email</label>
                <input
                  type='email'
                  className={style.inputBox}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={style.inputBoxWrapper}>
                <label className={style.inputLabel} htmlFor="textArea">How can we help you</label>
                <textarea
                  className={style.textArea}
                  id="textArea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type='submit' className={style.submitBtn}>Submit</button>
            </div>
          </div>
          <div className={style.imageCover}>
            <Image src="/ImagePeople.png" fill alt="imagePeople" className={style.imagePeople} />
          </div>
        </form>
      </div>
    </main>
  )
}

export default ContactPage