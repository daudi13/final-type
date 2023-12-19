import React from 'react';
import Image from 'next/image';
import style from "../styles/Privacy.module.scss"
import Link from 'next/link';

const page = () => {
  return (
    <main className={style.container}>
      <head>
        <title>Tana Privacy policy</title>
        <meta name="description" content="Learn about Tana's commitment to your privacy - your trusted partner in Quality Assurance (QA) and Data Analytics recruitment. Explore our Privacy Policy to understand how we handle and protect your personal information, ensuring transparency, security, and compliance with privacy regulations."/>
        <meta name="keyword" content="Privacy Policy, Tana privacy, QA recruitment privacy, Data Analytics recruitment privacy, personal information, transparency, security, privacy regulations compliance"/>
      </head>
      <div className={style.headerSection}>
        <div className={style.headerText}>
          <div className={style.imageCover}>
            <Image src="/Group113.png" className={style.img} fill alt="it" />
          </div>
          <h1 className={style.headerTitle}>Privacy Policy</h1>
          <span className={style.lastUpdated}>Last updated: September 1, 2023</span>
          <p className={style.headerDesc}>This Privacy Policy describes how Tana collects, uses, and shares your personal information when you visit <Link href="www.tanatech.io">This website</Link>. Please read this Privacy Policy carefully before using the Website.</p>
        </div>
      </div>
      <div className={style.bodySection}>
        <h3 className={style.bodySectionSubTitle}>Information we collect</h3>
        <p className={style.bodySectionText}>
          We may collect personal information when you: 
        </p>
        <ul className={style.bodySectionPoints}>
          <li><p>Fill out forms on our website</p></li>
          <li><p>Subscribe to our newsletter</p></li>
          <li><p>Contact us throught our contact forms or email</p></li>
          <li><p>Interact with us through social media</p></li>
        </ul>
        <p className={style.bodySectionText}>
          The types of personal information we may collect include:</p>
          <ul className={style.bodySectionPoints}>
          <li><p>Your name</p></li>
          <li><p>Your email address</p></li>
          <li><p>Your contact information</p></li>
          <li><p>Any other information you choose to provide</p></li>
        </ul>
        
      <h2 className={style.bodySectionTitle}>How we use your information</h2>
        <p className={style.bodySectionText}>We may use your personal information for the following purposes:</p>
        <ul className={style.bodySectionPoints}>
          <li><p>To provide you with information, product, or services you request from us</p></li>
          <li><p>To send you newsletters, updates, and promotional materials</p></li>
          <li><p>To respond to your inquiries or comments</p></li>
          <li><p>To improve our website and services</p></li>
          <li><p>To analyze user behaviour and preferences</p></li>
        </ul>
        <h3 className={style.bodySectionSubTitle}>Cookies and Similar Technologies</h3>
        <p>Our website may use cookies and similar technologies to enhance your experience. Cookies are small data files stored on your device that help us improve the website&apos;s functionality and your interaction with it. You can adjust your browser settings to refuse cookies when cookies are being sent</p>
        <h3 className={style.bodySectionSubTitle}>Sharing your information</h3>
          <p>
            We do not sell, trade, or rent your personal information to third parties, we may share your information with trusted service providers who help us operate the website and deliver services to you. These providers are bound by confidentiality agreements and are not permitted to use your information for their own purposes.
          </p>
        <h3 className={style.bodySectionSubTitle}>Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. we encourage you review the privacy policies of any websites you visit.
        </p>

        <h3 className={style.bodySectionSubTitle}>Your Choices</h3>
        <p>You have the right to:</p>
        <ul className={style.bodySectionPoints}>
          <li><p>To provide you with information, product, or services you request from us</p></li>
          <li><p>Access the personal information we hold about you</p></li>
          <li><p>Correct any inaccuracues in your personal information</p></li>
          <li><p>Opt out of reciving marketing communications from us</p></li>
          <li><p>Request the deletion of your personal information</p></li>
        </ul>
          <h3 className={style.bodySectionSubTitle}>Children&apos;s Privacy</h3>
          <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadertently collected information from a child, please contact us so we can remove the information</p>
        <h3 className={style.bodySectionSubTitle}>Changes to this privacy Policy</h3>
        <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date</p>
        <h3 className={style.bodySectionSubTitle}>Contact Us</h3>
        <p>If you have any questions about these Terms and Conditions, You can contact us: By email: hello@tanatech.io <br/> By using our website, you consent to the terms of this privacy policy.
        </p>
      </div>
    </main>
  )
}

export default page