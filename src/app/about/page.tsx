"use client"
import Head from 'next/head'
import style from '@/app/styles/About.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import GrowYourTeam from '@/components/growYourTeam/GrowYourTeam'

const page = () => {
  return (
    <main>
      <head>
        <title>About Tana</title>
        <meta name="description" content='Discover the essence of Tana - your trusted partner in Quality Assurance (QA) and Data Analytics recruitment. Learn about our mission to connect businesses with top-tier talent, our commitment to expertise and innovation, and the core values that define our client-centric approach. Explore the world of Tana and unlock opportunities for growth and success in QA and Data Analytics.'/>
        <meta name="keyword" content='QA analysis'/>
      </head>
      <div className={style.heroSection}>
        <div className={style.heroSectionText}>
          <h1 className={style.heroText}>Welcome to the future of Work</h1>
        </div>
      </div>
      <div className={style.factListSection}>
        <ul className={style.factList}>
          <li className={style.factListItem}><p className={style.factListText}>
          </p>By 2035, <span className={style.highlights}>1 of every 2 </span>people joining the global workforce will be African</li>
          <li className={style.factListItem}><p className={style.factListText}>
          </p><span className={style.highlights}>Imagine </span>What that scale of curiosity, creativity, knowledge, and grit <span className={style.highlights}>can create</span></li>
          <li className={style.factListItem}><p className={style.factListText}>
          </p>At Tana, our mission is to shape a world where <span className={style.highlights}>talent knows no bounds</span></li>
        </ul>
      </div>
      <div className={style.employeeBox}>
        <div className={style.imgCover}>
          <Image fill src='/Frame4018.png' alt="frame4018" />
        </div>
        <Link href="/meet-our-team" className={style.meetTalentLink}>Meet our Talent</Link>
      </div>
      <div className={style.paradigmShift}>
        <div className={style.paradigmShiftWrapper}>
          <div className={style.mainBox}>
            <h2 className={style.mainBoxHeader}>It's time for <br/> a paradigm shift</h2>
            <div className={style.mainBoxMainDesc}>
              <div className={style.mainBoxInner}>
                <div className={style.iconCover}>
                  <Image fill className={style.icon} src='/badge.png'alt="badge icon" />
                </div>
                <p className={style.mainBoxInnerText}>Enable life-changing career opportunities</p>
              </div>
              <div className={style.mainBoxInner}>
                <div className={style.iconCover}>
                  <Image fill className={style.icon} src='/lifeline.png' alt="lifeline icon" />
                </div>
                <p className={style.mainBoxInnerText}>Propel diversity in tech on all frontsh</p>
              </div>
              <div className={style.mainBoxInner}>
                <div className={style.iconCover}>
                  <Image fill className={style.icon} src='/messagecode.png' alt="message code" />
                </div>
                <p className={style.mainBoxInnerText}>Drive sustainable economic development</p>
              </div>
            </div>
            <GrowYourTeam text="Join us"/>
          </div>
          <div className={style.imageCover}>
            <Image fill src='/peopleOncomputer.png' alt="people around a computer" className={style.peopleImage} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page