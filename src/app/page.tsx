"use client"
import Image from 'next/image'
import Link from 'next/link'
import styles from "./styles/Home.module.scss"
import { data2, data, cards, logos } from './data/data'
import HappyCards from '@/components/happycards/HappyCards'
import { useContext, useState } from 'react'
import { ModalContext } from '@/context/GrowModalContext'
import { Button, Modal, Box, Typography } from '@mui/material'

export default function Home() {
  const { state, dispatch } = useContext(ModalContext);
  const [firstName, setFirstName] = useState(" ");
  const modalOpen = state.modalOpen;
  let open = modalOpen;
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleClose = () => dispatch({ type: "CHANGE_MODAL" });


  return (
    <main className={styles.mainSection}>
      <div className={styles.heroSection}>
        <div className={styles.overlay}>
        </div>
        <div className={styles.heroText}>
          <div className={styles.imageCover}>
            <Image src="/Group108.png" fill className={styles.groupImg} alt="group" />
          </div>
            <p className={styles.headerText}>Unlock the world as <br />your <strong>talent pool</strong></p>
            <h3 className={styles.subTitle}>The Future of work is here</h3>
          <button className={styles.heroBtn} onClick={() => dispatch({type: "CHANGE_MODAL"})}>Grow Your team</button>
          </div>
        </div>
        <div className={styles.valuePreposition}>
        <h3 className={styles.valuePrepostionTitle}>Reach new heights with incredible team members based in Africa –<br /> <span className={styles.mainText}>the world’s fastest-growing workforce</span></h3>
        <div className={styles.imageCover}>
          <Image src="/Vector7.png" fill className={styles.vectorSmile} alt="vector"/>
        </div>
        <div className={styles.valuePrepositionIcons}>
          {
            data.map((item) => (
            <div className={styles.valueIconBox} key={item.id}>
                <div className={styles.iconBox} style={{backgroundColor: `${item.color}`}}>
                  <div className={styles.imageBox}>
                      <Image src={item.img} fill className={styles.groupImg} alt="icons" />
                  </div>
              </div>
                <h4 className={styles.valueIconTitle}>{item.title}</h4>
                <p className={styles.valueIconText}>{item.desc}</p>
            </div>
            ))
          }
          </div>
        </div>
        <div className={styles.meetOurTeam}>
          <h2 className={styles.meetOurTeamTitle}>Meet our Team</h2>
          <iframe src="https://player.vimeo.com/video/835781373?h=b24e1c23b9" width="2120" height="515"  frameBorder="0" allow="autoplay; picture-in-picture" allowFullScreen></iframe>
          <p className={styles.meetOurTeamText}>Curious to see who could be joining the slack on Monday?</p>
          <Link href="/about" className={styles.learnBtn}>Learn more here</Link>
        </div>
        <div className={styles.socialProof}>
          <h2 className={styles.socialProofTitle}>Trusted By</h2>
          <div className={styles.logos}>
            {
            logos.map((logo, index) => (
                <div className={styles.imageBox}>
                  <Image src={logo} key={index} fill className={styles.logoImg} alt="img" />
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.whyUs}>
          <h3 className={styles.whyUsTitleMain}>Why we&apos;re better</h3>
          {
            data2.map((item, index) => (
              <div key={index} className={`${styles.whyUsBox} ${item.right && styles.whyUsRight}`}>
                <div className={styles.desc}>
                  <h3 className={styles.whyUsTitle}>{item.title}</h3>
                  <div className={styles.whyUsDash}></div>
                  <p className={styles.whyUsText}>{item.content}</p>
                  <Link href={item.hrefLink} className={`${item.activeBtn ? styles.active : styles.btn}`}>{item.linkName}</Link>
                </div>
                <div className={styles.imageBox}>
                  <Image src={item.img} fill className={styles.imageCover} alt='item' />
                </div>
              </div>
            ))
          }
      </div>
      <HappyCards/>
        <div className={styles.preFooter}>
        <div className={styles.preFooterHero}>
          <div className={styles.imageBox}>
            <Image src="/Group108.png" className={styles.imageGroup} fill alt="new"/>
          </div>
            <h3 className={styles.preFooterTitle}>Be a part of the movement</h3>
            <p className={styles.preFooterText}>Global equity starts with giving talented young people everywhere the chance to build meaningful careers.</p>
            <Link href="" className={styles.joinBtn}>Join Us</Link>
          </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box className={styles.form}>
          <form className={styles.contactForm}>
            <div className={styles.contactFormColumnRight}>
              <h2 className={styles.contactFormHeader}>We&apos;d love to hear from you!</h2>
              <div className={styles.underline} />
              <div className={styles.mainForm}>
                <div className={styles.mainFormName}>
                  <div className={styles.inputBoxWrapper}>
                    <label className={styles.inputLabel} htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className={styles.inputBox}
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className={styles.inputBoxWrapper}>
                    <label className={styles.inputLabel} htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className={styles.inputBox}
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.inputBoxWrapper}>
                  <label className={styles.inputLabel} htmlFor="email">Email</label>
                  <input
                    type='email'
                    className={styles.inputBox}
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputBoxWrapper}>
                  <label className={styles.inputLabel} htmlFor="textArea">How can we help you</label>
                  <textarea
                    className={styles.textArea}
                    id="textArea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button type='submit' className={styles.submitBtn}>Submit</button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </main>
  )
}