import React from 'react'
import styles from '@/app/styles/About.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { aboutUs } from '../data/data'

const page = () => {
  return (
    <main>
      <div className={styles.heroSection}>
        <div className={styles.heroTextSection}>
          <div className={styles.imageGroupCover}>
            <Image src="/Group113.png" fill alt="group" className={styles.groupImg} />
          </div>
          <h1 className={styles.heroTextHeader}>
            The swiss Army Knives<br/>of talent
          </h1>
          <p className={styles.heroTextDesc}>
            Versatile young proffessionals who are<br/> up for every challenge
          </p>
        </div>
        <div className={styles.imageCover}>
          <Image src="/HeroImageCluster.png" fill alt="manbackdrop" className={styles.heroImage} />
        </div>
      </div>
      <div className={styles.midSection}>
        {
          aboutUs.map((item, index) => (
            <div key={index} className={item.right ? styles.normalFlex : styles.midSectionItem}>
              <div className={styles.midSectionLeft}>
                <div className={styles.imageGroupCover}>
                  <Image src={item.img1} fill alt='vectors' className={styles.img} />
                </div>
                <h3 className={styles.midSectionHeader}>{item.title}</h3>
                <ul className={styles.midSectionList}>
                  {
                    item.content.map((listItem, index) => (
                      <li className={styles.midSectionListItem} key={index}>{listItem}</li>
                    )
                  )}
                </ul>
                <Link href={item.getInTouchLink} className={styles.getInTouchLink}>Get in touch</Link>
              </div>
              <div className={styles.imageCoverPrimary}>
                <Image fill src={item.primaryImage} alt="primary" className={styles.primaryImage} />
              </div>
              <div className={item.id == 1 ? styles.topRightCorner : item.id === 2 ? styles.topLeftCorner : styles.bottomRightCorner}>
                <Image fill src={item.absoluteImage} alt="absolute" className={styles.imageCoverAbsolute}  />
              </div>
            </div>
          ))
        }
      </div>
      <div className={styles.roleSection}>
        <h2 className={styles.roleSectionHeader}>Looking for another role?</h2>
        <Link href="/" className={styles.roleSectionLink}>Let&apos;s chat</Link>
      </div>
      <div className={styles.prefooter}>
        <div className={styles.prefooterContainer}>
          <div className={styles.prefooterDesc}>
            <div className={styles.imageGroupCover}>
              <Image src="/Group09.png" fill className={styles.img} alt="group"/>
            </div>
            <h2 className={styles.prefooterHeader}>eLogii <br />achieves<br />100% customer<br />satisfaction</h2>
            <Link href="/" className={styles.roleSectionLink}>See client stories</Link>
          </div>
          <div className={styles.imageCover}>
            <Image fill src="/prefooter.png" alt="prefooter" className={styles.prefooterImage} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page