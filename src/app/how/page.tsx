"use client"
import Head from 'next/head';
import React from 'react';
import style from "../styles/How.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import { how } from '../data/data';
import { FaRegCheckCircle  } from "react-icons/fa";
import GrowYourTeam from '@/components/growYourTeam/GrowYourTeam';

const page = () => {
  return (
    <main>
      <head>
        <title>How it works</title>
        <meta name="description" content='Discover how Tana works - your go-to partner in Quality Assurance (QA) and Data Analytics recruitment. Learn about our streamlined process for connecting businesses with top-tier talent, our commitment to efficiency and transparency, and the steps involved in finding the perfect match for QA and Data Analytics positions.'/>
        <meta name="keyword" content='How It Works, Tana process, QA recruitment process, Data Analytics recruitment process, talent matching, efficiency, transparency, perfect match in QA, perfect match in Data Analytics'/>
      </head>
      <div className={style.header}>
        <div className={style.imgCoverLeft}>
          <Image src="/supervisor.png" alt="it" fill className={style.img} />
        </div>
        <div className={style.imgCoverRight}>
          <Image src="/muhindi.png" alt="it" fill className={style.img} />
        </div>
        <div className={style.imgCoverSemi}>
          <Image src="/Ellipse684.png" alt="it" fill className={style.img} />
        </div>
        <div className={style.imgCoverRect}>
          <Image src="/Rectangle81.png" alt="it" fill className={style.img} />
        </div>
        <div className={style.imgCoverQuart}>
          <Image src="/Ellipse685.png" alt="it" fill className={style.img} />
        </div>
        <div className={style.heroText}>
          <div className={style.imgCover}>
          <Image src="/Group113.png" alt="it" fill className={style.img} />
          </div>
          <h1 className={style.heroTitle}>Talent you can Trust</h1>
          <p className={style.heroText}>
            No more hit-or-miss Find vetted and trained team members who grow alongside you
          </p>
        </div>
      </div>
      <div className={style.postHeader}>
          <h2 className={style.title}>Leave the heavy lifting to us</h2>
        <div className={style.mainBox}>
          <div className={style.point}>
            <div className={style.number}>1</div>
            <p className={style.mainText}>Tell us what you’re looking for</p>
          </div>
          <div className={style.point}>
            <div className={style.number}>2</div>
            <p className={style.mainText}>Interview hand-picked finalists</p>
          </div>
          <div className={style.point}>
            <div className={style.number}>3</div>
            <p className={style.mainText}>welcome your new team members</p>
          </div>
        </div>
        <div><GrowYourTeam text="Get started now" /></div>
      </div>
        <div className={style.whyUs}>
          {
            how.map((item, index) => (
              <div key={index} className={`${style.whyUsBox} ${item.right && style.whyUsRight}`}>
                <div className={style.desc}>
                  <div className={style.mainTitle}>
                    <h3 className={style.whyUsTitle}>{item.title}</h3>
                    <div className={style.whyUsDash}></div>
                  </div>
                    <div className={style.whyUsMainBox}>
                    {
                      item.points.map((point, index) => (
                        <div className={style.pointBox} key={index}>
                          <FaRegCheckCircle size={30} />
                          <p className={style.pointText}>{point}</p>
                        </div>
                    ))
                    }
                  </div>
                </div>
                <div className={style.imageBox}>
                  <Image src={item.img} fill className={style.imageCover} alt='item' />
                </div>
              </div>
            ))
          }
      </div>
      <div className={style.reasons}>
        <div className={style.inner}>
          <div className={style.reasonsUpper}>
            <div className={style.imgCover}>
              <Image src="/Shapes.png" fill  alt="it" className={style.img} />
            </div>
            <p className={style.text}>Whatever you need we've got you</p>
          </div>
          <div className={style.midBox}>
            <div className={style.midBoxSec}>
              <div className={style.imgCover}>
                <Image src="/IconBackground.png" fill  alt="it" className={style.img} />
              </div>
              <p className={style.title}>No compromises</p>
              <p className={style.text}>Stay on Budget without sacrifucing quality</p>
            </div>
            <div className={style.midBoxSec}>
              <div className={style.imgCover}>
                <Image src="/IconBackground2.png" fill  alt="it" className={style.img} />
              </div>
              <p className={style.title}>No Surprises</p>
              <p className={style.text}>We deliver reliably — every person, every time</p>
            </div>
            <div className={style.midBoxSec}>
              <div className={style.imgCover}>
                <Image src="/IconBackground3.png" fill  alt="it" className={style.img} />
              </div>
              <p className={style.title}>No Stress</p>
              <p className={style.text}>End-to-end support. We’re in this with you</p>
            </div>
          </div>
            <Link href="/why" className={style.link}>What makes us special</Link>
        </div>
      </div>
      <div className={style.funFactSection}>
        <div className={style.imgCover}>
          <Image src="/Image.png" fill className={style.img} alt="it" />
        </div>
      <div className={style.textField}>
        <div className={style.iconCover}>
          <Image src="/Group113.png" alt="it" fill className={style.img} />
        </div>
        <p className={style.text}>TripArc squashes 3x more software bugs</p>
        <Link href="/success-stories" className={style.link}>See client stories</Link>
      </div>
      </div>
      <div className={style.prefooter}>
        <div className={style.prefooterOverlay}></div>
        <div className={style.midBody}>
          <div className={style.imgCover}>
            <Image src="/Shapes.png" fill  alt="it" className={style.img} />
          </div>
          <p>More questions?</p>
          <div><GrowYourTeam text="We have answers"/></div>
        </div>
      </div>
    </main>
  )
}

export default page