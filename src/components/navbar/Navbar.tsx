import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${openSans.className}`}>
      <div className={styles.navbarWrapper}>
        <Link href="/" className={styles.logo}><Image src="/Logo.png" alt="blaze logo" width={101} height={32} className={styles.logoImg} /></Link>
        
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}><Link className={styles.menuLinks} href="/">For Companes</Link></li>
          <li className={styles.menuItem}><Link className={styles.menuLinks} href="/meet">Meet our Talent</Link></li>
          <li className={styles.menuItem}><Link className={styles.menuLinks} href="/about">About us</Link></li>
          <li className={`${styles.menuItem} ${styles.actionBtn}`}><Link className={`${styles.menuLinks} ${styles.menuAction}`} href="/grow">Grow your team</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar