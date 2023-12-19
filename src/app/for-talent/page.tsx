
import Head from 'next/head'
import style from '../styles/ForTalent.module.scss'
import { midSectionDate } from '../data/data'
import { Archivo, Open_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import groupVector from "/Group111.png";
import testimonial from '/testimonial.png'

const archivo = Archivo({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });



const page = () => {
  return (
    <main className={`${archivo.className} ${openSans.className}`}>
      <head>
        <title>Tana Talent</title>
        <meta name="description" content='Explore opportunities with Tana - your gateway to exciting careers in Quality Assurance (QA) and Data Analytics. Learn about our commitment to supporting your professional growth, connecting you with leading businesses, and providing a platform for your success in QA and Data Analytics careers.'/>
        <meta name="keyword" content='For Talent, Tana careers, QA careers, Data Analytics careers, professional growth, job opportunities, leading businesses, success in QA, success in Data Analytics'/>
      </head>
      <div className={style.headerSection}>
        <div className={style.headerSectionText}>
          <div className={style.headerText}>
            <div className={style.imageCover}>
              <Image src="/Group111.png" className={style.groupImg} alt='lt' fill />
            </div>
            <h2 className={style.headerTextTitle}>Ready, set, opportunity!</h2>
            <p className={style.headerTextDesc}>We believe that young people everywhere deserve the chance to thrive and build the future</p>
          </div>
        </div>
      </div>
      <div className={style.postHeaderSection}>
        <h2 className={style.postHeaderSectionText}>
          Tana connects <span className={style.highlighted}>brilliant young Africans</span> to remote roles with global companies
        </h2>
        <Link href="" className={style.linkBtn}>Apply now</Link>
      </div>
      <div className={style.midSection}>
        {
          midSectionDate.map((item, index) => (
            <div className={` ${item.reverse ? style.reverse : ""} ${style.itemSection}`} key={index}>
              <div className={style.textBox}>
                <h3 className={style.midSectionTitle}>{item.title}</h3>
                <div className={style.blueUnderline} />
                <>{item.content}</>
              </div>
              <div className={style.imgCover}>
                <Image alt='' fill className={style.itemSectionImage} src={item.img}/>
              </div>
            </div>
          )
            
          )
        }
      </div>
      <div className={style.cardTestimonial}>
        <div className={style.testimonialCard}>
          <Image src='/testimonial.png' fill alt='' className={style.img} />
        </div>
      </div>
      <div className={style.preFooter}>
        <div className={style.overlay} />
        <div className={style.preFooterText}>
          <div className={style.imgContainer}>
            <Image src="/Group111.png" fill className={style.img} alt='lt' />
          </div>
          <h2 className={style.preFooterHeader}>There's a world of possibilities out there</h2>
          <Link href="" className={style.linkBtn}>Get Connected</Link>
        </div>
      </div>
    </main>
  )
}

export default page