"use client"

import React from 'react'
import style from "../styles/Why.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { FaRegCheckCircle  } from "react-icons/fa";
import GrowYourTeam from '@/components/growYourTeam/GrowYourTeam';


const page = () => {
  return (
    <main>
      <head>
        <title>Why us</title>
        <meta name="description" content='Discover why Tana is your preferred partner in Quality Assurance (QA) and Data Analytics recruitment. Explore the unique benefits of choosing Tana, from our industry expertise and commitment to innovation to our client-centric approach. Find out why businesses and professionals trust Tana for top-tier talent solutions in QA and Data Analytics.'/>
        <meta name="keyword" content='Why Us, Tana advantages, QA recruitment, Data Analytics recruitment, industry expertise, innovation, client-centric, top-tier talent solutions, trust'/>
      </head>
      <div className={style.header}>
        <div className={style.headerText}>
          <div className={style.iconCover}>
            <Image src="/Group110.png" fill alt="group vectors" className={style.img} />
          </div>
          <h2 className={style.headerTitle}>Build your dream team</h2>
          <p className={style.headerText}>Access top-notch talent easily, reliably, and affordably</p>
          <GrowYourTeam text='Grow your team'/>
        </div>
        <div className={style.imgCover}>
          <Image src="/HeroImageCluster2.png" className={style.img} fill alt="Woman holding cup looking at Laptop"/>
        </div>
      </div>
      <div className={style.differenceSection}>
        <h2 className={style.sectionHeader}>The Tana Difference</h2>
        <div className={style.points}>
          <div className={style.pointsBox}>
            <div className={style.point}>
              <FaRegCheckCircle/>
              <p>Fully embedded, dedicated talent</p>
            </div>
            <div className={style.point}>
              <FaRegCheckCircle/>
              <p>Complete control of your team</p>
            </div>
            <div className={style.point}>
              <FaRegCheckCircle/>
              <p>Talent who match your value</p>
            </div>
          </div>
          <div className={style.pointsBox}>
            <div className={style.point}>
              <FaRegCheckCircle/>
              <p>Motivated individuals for the long-term</p>
            </div>
            <div className={style.point}>
              <FaRegCheckCircle/>
              <p>Tailored training to meet your needs</p>
            </div>
            <div className={style.point}>
              <FaRegCheckCircle/>
              <p>Ongoing support for you and your talent</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.boxSection}>
        <div className={style.boxSectionInner}>
          <div className={style.imageCover}>
            <Image src="/Maskgroup.png" alt="" fill className={style.img} />
          </div>
          <div className={style.textSection}>
            <h2 className={style.innerHeader}>Our anything-but-typical talent profile</h2>

            <ul className={style.points}>
              <li className={style.pointItem}>Native English Speaker</li>
              <li className={style.pointItem}>Bsc. in Computer Science, information Technology, or Statistics</li>
              <li className={style.pointItem}>Experience in HTML/CSS, JavaScript, Python, and SQL</li>
              <li className={style.pointItem}>Excellent teamwork, communication attention to detail and critical thinking</li>
            </ul>
            <Link href="/meet-our-team" className={style.link}>Meet our Talent</Link>
          </div>
        </div>
      </div>
      <div className={style.uniqueSection}>
        <h2 className={style.uniqueHeader}>What makes us Unique</h2>
        <div className={style.box}>
          <div className={style.uniqueBox}>
            <div className={style.pointSection}>
              <div className={style.iconBox}>
                <Image src="/badge.png" className={style.img} fill alt=""/>
              </div>
              <div className={style.textSection}>
                <p className={style.title}>Commitment to excellence</p>
                <p className={style.text}>Only the top 2% of applicants pass Tana’s rigorous screening and interview process</p>
              </div>
            </div>
            <div className={style.pointSection}>
              <div className={style.iconBox}>
                <Image src="/lifeline.png" className={style.img} fill alt=""/>
              </div>
              <div className={style.textSection}>
                <p className={style.title}>Your needs, your way</p>
                <p className={style.text}>Curated matches made by humans, not algorithms. You always have the final say over who you work with.</p>
              </div>
            </div>
            <div className={style.pointSection}>
              <div className={style.iconBox}>
                <Image src="/messagecode.png" className={style.img} fill alt=""/>
              </div>
              <div className={style.textSection}>
                <p className={style.title}>Seamless collaboration</p>
                <p className={style.text}>Team members are timezone-aligned, work only for you, and fully embedded into your day-to-day</p>
              </div>
            </div>
            <div className={style.pointSection}>
              <div className={style.iconBox} style={{ backgroundColor: "#c5e2ee", borderRadius: "10px"}}>
                <Image src="/cloud-add.svg" className={style.img} fill alt=""/>
              </div>
              <div className={style.textSection}>
                <p className={style.title}>Lighter than light touch</p>
                <p className={style.text}>We take the burden of recruitment, training, payroll, and compliance off your shoulders</p>
              </div>
            </div>
            <div className={style.pointSection}>
              <div className={style.iconBox}>
                <Image src="/badge.png" className={style.img} fill alt=""/>
              </div>
              <div className={style.textSection}>
                <p className={style.title}>Culture that transcends borders</p>
                <p className={style.text}>We build community on the ground for long-term engagement and retention</p>
              </div>
            </div>
            <Link href="/how" className={style.link}>How we make it happen</Link>
          </div>
          <div className={style.imageCover}>
            <Image className={style.img} src="/muhindi.png" fill alt='' />
          </div>
          <div className={style.infoBox}>
            <div className={style.content}>
              <p className={style.textBox}>"Kariuki’s the best tech support rep I’ve ever hired. We’ve tried people for this role in Eastern Europe — even in the UK — there’s just no comparison. Clients love him.”</p>
              <p className={style.name}>Andrew Mukerjee</p>
              <span className={style.position}>Chief Executive Officer</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.preFooter}>
        <div className={style.textSection}>
          <div className={style.imgCover}>
            <Image src="/Group110.png" alt='group icons' fill className={style.img} />
          </div>
            <h2 className={style.prefooterHeader}>Keep pace with the changing world of talent</h2>
          <GrowYourTeam text="Get in touch"/>
        </div>
      </div>
    </main>
  )
}

export default page