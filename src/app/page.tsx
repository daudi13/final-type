import Image from 'next/image'
import Link from 'next/link'
import styles from "./styles/Home.module.scss"
import { data2, data, cards, logos } from './data/data'

export default function Home() {
  return (
    <main className={styles.mainSection}>
      <div className={styles.heroSection}>
        <div className={styles.overlay}>
        </div>
        <div className={styles.heroText}>
          <div className={styles.imageCover}>
            <Image src="/Group108.png" fill className={styles.groupImg} alt="group" />
          </div>
            <p className={styles.headerText}>Unlock the world as <br />your <strong>talent pool</strong></p>
            <h3 className={styles.subTitle}>The Future of work is here</h3>
            <Link href="" className={styles.heroBtn}>Grow Your team</Link>
          </div>
        </div>
        <div className={styles.valuePreposition}>
        <h3 className={styles.valuePrepostionTitle}>Reach new heights with incredible team members based in Africa –<br /> <span className={styles.mainText}>the world’s fastest-growing workforce</span></h3>
        <div className={styles.imageCover}>
          <Image src="/Vector7.png" fill className={styles.vectorSmile} alt="vector"/>
        </div>
        <div className={styles.valuePrepositionIcons}>
          {
            data.map((item) => (
            <div className={styles.valueIconBox} key={item.id}>
                <div className={styles.iconBox}>
                  <div className={styles.imageBox}>
                      <Image src={item.img} fill className={styles.groupImg} alt="icons" />
                  </div>
              </div>
              <h4 className={styles.valueIconTitle}>Tech-savvy</h4>
              <p className={styles.valueIconText}>Ready to shine in tech & product roles</p>
            </div>
            ))
          }
            {/* <div className={styles.valueIconBox}>
              <div className={`${styles.iconBox} ${styles.iconYellow}`}>
              <Image src={Message} className={styles.groupImg} alt="group" />
              </div>
              <h4 className={styles.valueIconTitle}>Tech-savvy</h4>
              <p className={styles.valueIconText}>Seamless collaboration with global teams</p>
            </div> */}
            {/* <div className={styles.valueIconBox}>
              <div className={`${styles.iconBox} ${styles.iconBlue}`}>
              <Image src={Global} className={styles.groupImg} alt="group" />
              </div>
              <h4 className={styles.valueIconTitle}>Tech-savvy</h4>
              <p className={styles.valueIconText}>Ready to shne in tech & product roles</p>
            </div> */}
            {/* <div className={styles.valueIconBox}>
              <div className={`${styles.iconBox} ${styles.iconYellow}`}>
              <Image src={cost} className={styles.groupImg} alt="group" />
              </div>
              <h4 className={styles.valueIconTitle}>Tech-savvy</h4>
              <p className={styles.valueIconText}>Affordable for teams at any size</p>
            </div> */}
          </div>
        </div>
        {/* <div className={styles.meetOurTeam}>
          <h2 className={styles.meetOurTeamTitle}>Meet our Team</h2>
          <iframe src="https://player.vimeo.com/video/835781373?h=b24e1c23b9" width="2120" height="515"  frameBorder="0" allow="autoplay; picture-in-picture" allowFullScreen></iframe>
          <p className={styles.meetOurTeamText}>Curious to see who could be joining the slack on Monday?</p>
          <Link href="" className={styles.learnBtn}>Learn more here</Link>
        </div>
        <div className={styles.socialProof}>
          <h2 className={styles.socialProofTitle}>Trusted By</h2>
          <div className={styles.logos}>
            {
              data.map((img, index) => (
                <Image src={img} key={index} className={styles.logoImg} alt="img" />
              ))
            }
          </div>
        </div>
        <div className={styles.whyUs}>
          <h3 className={styles.whyUsTitleMain}>Why we&apos;re better</h3>
          {
            data2.map((item, index) => (
              <div key={index} className={`${styles.whyUsBox} ${item.right && styles.whyUsRight}`}>
                <div className={styles.desc}>
                  <h3 className={styles.whyUsTitle}>{item.title}</h3>
                  <div className={styles.whyUsDash}></div>
                  <p className={styles.whyUsText}>{item.content}</p>
                  <Link href={item.hrefLink} className={`${item.activeBtn ? styles.active : styles.btn}`}>{item.linkName}</Link>
                </div>
                <Image src={item.img} className={styles.imageCover} alt='item' />
              </div>
            ))
          }
        </div>
        <div className={styles.happy}>
          <h3 className={styles.happyTitle}>You could be this happy</h3>
          <div className={styles.happyCard}>
            {
              cards.map((item, index) => (

                <div key={index} className={styles.cardBox}>
                  <Image src={item.img} className={styles.image} alt="item"/>
                  <p className={styles.content}>{item.content}</p>
                  <div className={styles.photoCutOut}></div>
                  <Image src={item.img2} className={styles.quotes} alt="item"/>
                  <div className={styles.credentials}>
                    <p className={styles.name}>{item.managerName}</p>
                    <p className={styles.position}>{item.position}</p>
                  </div>
                </div>
              ))
            }
          </div>
          </div>
        <div className={styles.preFooter}>
          <div className={styles.preFooterHero}>
            <Image src={newGroup} alt="new"/>
            <h3 className={styles.preFooterTitle}>Be a part of the movement</h3>
            <p className={styles.preFooterText}>Global equity starts with giving talented young people everywhere the chance to build meaningful careers.</p>
            <Link href="" className={styles.joinBtn}>Join Us</Link>
          </div>
        </div> */}
    </main>
  )
}