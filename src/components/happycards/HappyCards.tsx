import React from 'react'
import styles from "@/app/styles/HappyCards.module.scss";
import Image from 'next/image';
import { cards } from '@/app/data/data';

const HappyCards = () => {
  return (
  <div className={styles.happy}>
      <h3 className={styles.happyTitle}>You could be this happy</h3>
      <div className={styles.happyCard}>
        {
          cards.map((item) => (

            <div key={item.id} className={styles.cardBox}>
              <div className={styles.imageBox}>
                <Image src={item.img} fill className={styles.image} alt="item"/>
              </div>
              <p className={styles.content}>{item.content}</p>
              <div className={styles.photoCutOut}></div>
              <div className={styles.imageBoxTwo}>
              <Image src={item.img2} fill className={styles.quotes} alt="item"/>
              </div>
              <div className={styles.credentials}>
                <p className={styles.name}>{item.managerName}</p>
                <p className={styles.position}>{item.position}</p>
              </div>
            </div>
          ))
        }
      </div>
  </div>
  )
}

export default HappyCards