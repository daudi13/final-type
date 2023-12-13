"use client";
import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin']})


const Footer = () => {
  const [email, setEmail] = React.useState("");

  const year = new Date().getFullYear()

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    console.log(`the email you entered was: ${email}`)
  }

  return (
    <div className={`${styles.footerWrapper} ${openSans.className}`}>
      <div className={styles.footerContainer}>
        <Image src="/Logo.png" width={101} height={32} className={styles.footerImage} alt="logo" />
        <div className={styles.footerMidLinks}>
          <div style={{display: 'flex', gap: '200px'}}>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><Link href="/why" className={styles.linkItem}>Why Tana</Link></li>
              <li className={styles.footerLink}><Link href="/tana" className={styles.linkItem}>How it Works</Link></li>
              <li className={styles.footerLink}><Link href="/meet" className={styles.linkItem}>Meet our Talent</Link></li>
            </ul>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><Link href="/about" className={styles.linkItem}>About Us</Link></li>
              <li className={styles.footerLink}><Link href="/contact" className={styles.linkItem}>Contact</Link></li>
              <li className={styles.footerLink}><Link href="/for-talent" className={styles.linkItem}>For Talent</Link></li>
            </ul>
          </div>

          <div className={styles.footerFormSection}>
            <h3 className={styles.footerFormTitle}>Join our community and be part of our journey</h3>

            <form className={styles.footerForm}>
              <label className={styles.footerFormInputSec}>
                <input type='email'
                  placeholder='Enter your email address'
                  value={email}
                  className={styles.inputBox}
                  onChange ={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubmit} className={styles.footerFormSubmitBtn}>subscribe</button>
              </label>
            </form>
          </div>
        </div>
        <div className={styles.footerBottomSection}>
          <div className={styles.footerBottomSocials}>
            <Link href="/" className={styles.footerBottomSocialLinks}><FaLinkedin/></Link>
            <Link href="/" className={styles.footerBottomSocialLinks}><FaTwitter /></Link>
          </div>
          <div className={styles.footerBottomSectionLinks}>
            <ul className={styles.sectionLinks}>
              <li className={styles.sectionLink}><p className={styles.linkItem}>© {year} Tana. All rights reserved</p></li>
              <li className={styles.sectionLink}><Link className={styles.linkItem} href="/privacy">Privacy Policy</Link></li>
              <li className={styles.sectionLink}><Link className={styles.linkItem} href="/footer">Terms of Service</Link></li>
              <li className={styles.sectionLink}><Link className={styles.linkItem}href="/cookie">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer