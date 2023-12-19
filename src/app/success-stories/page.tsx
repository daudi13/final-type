"use client"

import React from 'react';
import style from "../styles/Success.module.scss"
import Image from 'next/image';
import { Archivo, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import { logos, success } from '../data/data';

const archivo = Archivo({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });


const page = () => {
  return (
    <main className={`${archivo.className} ${openSans.className}`}>
      <div className={style.headerSection}>
        <div className={style.headerTextSection}>
          <div className={style.imageCover}>
            <Image src="/Group110.png" fill alt="altvector" className={style.img}  />
          </div>
          <h2 className={style.headerTextTitle}>This could be you</h2>
          <p className={style.headerTextDesc}>Learn how companies like yours are unlocking scale, innovation, and savings with Tana</p>
        </div>
        <div className={style.imageCover}>
          <Image src="/Frame3916.png" fill alt="vector" className={style.altVectorImage} />
        </div>
      </div>
      <div className={style.trusted}>
        <h3 className={style.trustedTitle}>Trusted by</h3>
        <div className={style.trustedBrands}>
          {
            logos.map((item, index) => (
              <div className={style.imgCover} key={index}> 
                <Image src={item} fill className={style.logoImg} alt='brand logo' />
              </div>
            ))
          }
        </div>
      </div>
      <div className={style.cardSection}>
        <div className={style.rightBox} />
        <div className={style.leftBox} />

        <div className={style.cards}>
          {
            success.map((item, index) => (
              <div className={style.card} key={index}>
                <div className={style.imgCover}>
                  <Image src={item.primaryImg} fill className={style.cardImage} alt="card image" />
                </div>
                <div className={style.groupImgCover}>
                  <Image src={item.groupImg} fill alt="alt" />
                </div>
                <p className={style.cardText}>{item.content}</p>
                <button className={style.btn}>View the story</button>
              </div>
            ))
          }
        </div>
      </div>
      <div className={style.prefooter}>
        <div className={style.groupImgCover}>
          <Image src="/Group110.png" className={style.img} fill alt="alt" />
        </div>
        <h2 className={style.prefooterTitle}>Learn how Tana can <br/> help you go further, faster</h2>
        <Link href="" className={style.linkBtn}>Get in touch</Link>
      </div>
    </main>
  )
}


export default page