"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Meet.module.scss"
import { featuredProfiles, devTools, cards } from '../data/data'
import { Open_Sans } from 'next/font/google';
import HappyCards from '@/components/happycards/HappyCards'
import GrowYourTeam from '@/components/growYourTeam/GrowYourTeam'


const openSans = Open_Sans({ subsets: ["latin"] });

const page = () => {
  return (
    <main>
      <head>
        <title>Meet our Team</title>
        <meta name="description" content="Get to know the dedicated professionals at Tana - your trusted team in Quality Assurance (QA) and Data Analytics recruitment. Learn about the expertise, passion, and commitment of our team members who work tirelessly to connect businesses with top-tier talent and uphold Tana's values of excellence, innovation, and client satisfaction."/>
        <meta name="keyword" content="Meet Our Team, Tana team, QA recruitment team, Data Analytics recruitment team, expertise, passion, commitment, excellence, innovation, client satisfaction"/>
      </head>
      <div className={styles.heroSection}>
        <div className={styles.heroTextSection}>
          <div className={styles.imageCover}>
            <Image src="/Group113.png" fill className={styles.img} alt="group101"/>
          </div>
          <h1 className={styles.heroTextHeader}>
            Smart. Driven.<br/>Dedicated.
          </h1>
          <p className={styles.heroTextDesc}>
            Ready to go in 100+ technologies and ready<br/> to throw memes with the best of them
          </p>
        </div>
        <div className={styles.imageBoxTwo}>
          <Image src="/network.png" fill  alt="networkImage"className={styles.heroImage} />
        </div>
        <div className={styles.imageBoxThree}>Meet Our Team, Tana team, QA recruitment team, Data Analytics recruitment team, expertise, passion, commitment, excellence, innovation, client satisfaction
          <Image src="/Ellipse711.png" fill alt="cornerImage" className={styles.heroCornerImage} />
        </div>

      </div>
      <div style={{background:"white"}} className={`${styles.meetOurTeam} ${styles.meetOurTeam}`}>
          <h2 className={styles.meetOurTeamTitle}>Meet our Talent</h2>
          <iframe src="https://player.vimeo.com/video/835781373?h=b24e1c23b9" width="2120" height="515"  frameBorder="0" allow="autoplay; picture-in-picture" allowFullScreen></iframe>
          <p className={`${styles.meetOurTeamText} ${styles.tagLine}`}>At Tana, we believe your skills and your character define you —<br/>not where in the world you were born</p>
        <Link href="/" className={styles.learnBtn}>Get to know our mission</Link>
        <div className={styles.imageBox}>
          <Image src="/Ellipse712.png" fill alt="midIMage" className={styles.meetOurTeamMidImage} />
        </div>
      </div>
      <div className={styles.featuredSection}>
          <h2 className={styles.featuredSectionHeader}>Featured profiles</h2>
        <div className={styles.featuredSectionColumn}>
          {
            featuredProfiles.map((item, index) => (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}} key={index}>
                <div className={styles.featuredWrapper}>
                  <div className={styles.imageBox}>
                    <Image src={item.card} fill alt="box card" className={styles.featuredCard} />
                  </div>
                <div className={styles.featuredDesc}>
                    <div className={styles.featuredImageBox}>
                      <div className={styles.imageBox}>
                        <Image src={item.img} fill alt="user profile" className={styles.userProfile} />
                      </div>
                    <p className={styles.featuredUserName}>{item.name}</p>
                    <p className={styles.featuredJobTitle}>{item.job}</p>
                  </div>
                  <div className={styles.featuredUserProfile}>
                    <div className={styles.featuredUserProfileTop}>
                      <div className={styles.featuredUserProfileLeft}>
                        <div className={styles.featuredProfileKey}>
                          <p className={styles.profileKey}>EDUCATION</p>
                          <span className={styles.profileValue}>{item.education}</span>
                        </div>
                        <div className={styles.featuredProfileKey}>
                          <p className={styles.profileKey}>COMPANY HQ</p>
                          <span className={styles.profileValue}>{item.companyHq}</span>
                        </div>
                        <div className={styles.featuredProfileKey}>
                          <p className={styles.profileKey}>HOBBIES</p>
                          <span className={styles.profileValue}>{item.hobbies}</span>
                        </div>
                      </div>
                      <div className={styles.featuredProfileRight}>
                        <p className={styles.profileKey}>TECH SKILLS</p>
                        <div className={styles.techCapsules}>
                          {
                            item.techSkills.map((skill, index) => (
                            <div className={styles.featuredButtonSkill} key={index}
                              >{skill}</div>
                          ))
                          }
                        </div>
                      </div>
                    </div>
                    <div className={styles.featuredUserProfileBottom}>
                      <p className={styles.profileKey}>PROFFESSIONAL STATEMENT</p>
                      <span className={styles.featuredValue}>{item.profile}</span>
                    </div>
                  </div>
                </div>
              </div>
                <Link href={item.findLink} className={styles.learnBtn}>Find your {item.name}</Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.tools}>
        <h2 className={styles.toolsHeader}>50+ tools and counting</h2>
        <div className={styles.toolsCapsuleWrapper}>
          {
            devTools.map((tool, index) => (
              <div className={styles.devToolItem} key={index}>{tool}</div>
            ))
          }
        </div>
      </div>
      <HappyCards/>
      <div className={styles.preFooterSection}>
        <div className={styles.preFooterSectionHero}>
          <div className={styles.imageCover}>
            <Image src="/Group113.png" alt="vectors" fill className={styles.groupImg} />
          </div>
          <h3 className={styles.preFooterHeroHeader}>
            Build the team <br/> you&apos;ve always wanted
          </h3>
          <GrowYourTeam text="Get in touch"/>
        </div>
      </div>
    </main>
  )
}

export default page