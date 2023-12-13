"use client"

import React, { useState } from 'react'
import styles from "@/app/styles/Navbar.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from 'react-icons/fa6';

const openSans = Open_Sans({ subsets: ['latin'] });

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className={`${styles.navbar} ${openSans.className}`} style={{position: "fixed", top: 0}}>
      <div className={styles.navbarWrapper}>
        <Link href="/" className={styles.logo}><Image src="/Logo.png" alt="blaze logo" width={101} height={32} className={styles.logoImg} /></Link>
        
        <div className={styles.menuItems}>
          <div className={styles.menuDropDown}>
            <Link className={`${styles.menuLinks} ${styles.dropDown}`} onMouseEnter={() => setNavActive(true)} onMouseLeave={() => setNavActive(false)} href="/">For Companies{navActive ? <FaChevronDown size={10} /> : <FaChevronUp size={10} />}</Link>
          </div>
          <Link className={styles.menuLinks} href="/meet-our-team">Meet Our Talents</Link>
          <Link className={styles.menuLinks} href="/about">About us</Link>
        </div>
        <Link className={`${styles.actionBtn} ${styles.menuAction}`} href="/grow">Grow your team</Link>
      </div>
      {
        navActive && <div className={styles.dropDownItem}>
          <div className={styles.dropDownLinks} onMouseEnter={() => setNavActive(true)} onMouseLeave={() => setNavActive(false)}>
            <Link className={styles.links} href="/why">Why tana</Link>
            <Link className={styles.links} href="how">How it works</Link>
            <Link className={styles.links} href="/roles">Our Roles</Link>
            <Link className={styles.links} href="/success-stories">Success stories</Link>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar