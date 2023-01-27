/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react'
import AppBody from '../AppBody'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import Popup from 'reactjs-popup'
import ReactTooltip from 'react-tooltip'
import styles from './Home.module.css'

import './modal.scss'
import header__img from '../../assets/images/home/slider-10.png'
import meta__img23 from '../../assets/images/home/meta-2-3.png'
import meta__img22 from '../../assets/images/home/meta-2-2.png'
import meta__img21 from '../../assets/images/home/meta-2-1.png'
import meta__img31 from '../../assets/images/home/meta-3-1.png'
import meta__img32 from '../../assets/images/home/meta-3-2.png'
import team__profile from '../../assets/images/home/profile_picpng.png'
import azurLogo from '../../assets/images/home/0a.jpg'
import onyxLogo from '../../assets/images/home/0o.jpg'
import icon__phone from '../../assets/images/home/phone-icon.png'
import icon__mail from '../../assets/images/home/mail-icon.png'
import icon__location from '../../assets/images/home/location-icon.png'
import icon__facebook from '../../assets/images/home/icon-facebook.png'
import icon__linkedin from '../../assets/images/home/icon-linkedin.png'
import icon__social from '../../assets/images/home/icon-social.png'
import icon__play from '../../assets/images/home/play-icon.png'
import icon__telegram from '../../assets/images/home/icon_telegram.png'
import icon__arrow from '../../assets/images/home/arrow-right.png'
import icon__nft from '../../assets/images/home/icon-nft.png'
import icon__arrowDown from '../../assets/images/home/icon-arrowDown.png'
import icon__ball from '../../assets/images/home/ball.png'
import Accordion from './components/Accordion'
import img__left from '../../assets/images/home/img-left.png'
import img__right from '../../assets/images/home/img-right.png'
import project__img1 from '../../assets/images/home/project-img1.png'
import project__img2 from '../../assets/images/home/project-img2.png'
import logo from '../../assets/images/home/logo.png'
import icon_game from '../../assets/images/home/ICON_game.png'
import icon_dex from '../../assets/images/home/icon_dex.png'
import icon_nft from '../../assets/images/home/icon_nft.png'
import icon_ball from '../../assets/images/home/icon_ball.png'
import img_right_about from '../../assets/images/home/img_right_about.png'
import img_left_team from '../../assets/images/home/img_left_team.png'
import img_right_com from '../../assets/images/home/img_right_com.png'
import { SocialIcon } from 'react-social-icons'

export default function Home() {
  const pcolor = "#9370db"
  return (
    <>
      <ReactTooltip
        effect="solid"
        textColor="#fff"
        borderColor="transparent"
        backgroundColor="linear-gradient(90.54deg, #E600EE 42.56%, #8437FE 101.85%)"
        className={styles.tooltip}
        arrowColor="#E600EE"
      />
      {/* **************** Header **************** */}
      <header className={styles.nav}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="" />
        </a>
        <ul className={styles.nav__links}>
          <li>
            <a href="https://github.com/AzurSwap" target="_blank" rel="noreferrer">
              Resources
            </a>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
              About Us
            </Link>
          </li>
          <li>
            <Link activeClass="active">Audit</Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="community">
              Community
            </Link>
          </li>
          <li>
            <a href="http://azurtoken.org" target="_blank" rel="noreferrer">
              Azur Token
            </a>
          </li>
        </ul>
        <div>
          <a
            href="https://drive.google.com/file/d/16jMRvPGFcFXm0mvon4QOOvWFlfnIFU-Z/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={styles.hero__btn1_nav}
          >
            Whitepaper
          </a>
          <Popup
            trigger={open => (
              <a href="#" className={styles.btn__header}>
                Sign up
              </a>
            )}
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Subscribe to List</div>
                <div className="content">
                  <form>
                    <input type="email" required placeholder="Enter Email Address" />
                    <button type="submit">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </header>

      {/* *********************** hero *********************** */}
      <div className={styles.hero}>
        <img src={header__img} alt="" className={styles.hero__img} />
        <div className={styles.hero__content}>
          <h1>Entering </h1>
          <h1>a borderless and completely</h1>
          <h1>
            <span className={styles.text__color}>decentralized</span> world.
          </h1>
          <p>
            AzurSwap is designed to be completely decentralized, <br />
            away from other people's control or interference, to help you trade with
            <br /> just a few clicks. This Swap will work using smart contracts
          </p>
          <div className={styles.hero__btn}>
            <a href="/#/swap" className={styles.hero__btn1}>
              Launch App
            </a>
            <a href="#" className={styles.hero__btn2}>
              <img src={icon__play} alt="" />
              Learn More
              <img src={icon__arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* **************** main **************** */}
      <main className={styles.main}>
        <img src={img__left} className={styles.img__left} alt="" />
        <img src={img__right} className={styles.img__right} alt="" />

        <img src={img_right_about} className={styles.img_right_about} alt="" />

        <section className={styles.main__container}>
          <div className={styles.main__title} id="project">
            <h1>GET READY FOR EXCITEMENT!</h1>
          </div>

          <section className={styles.main__container}>
            {/* **************** Category **************** */}

            <section className={styles.category__main}>
              <a href="/#/swap" className={styles.category__card}>
                <img src={icon_dex} className={styles.icon_dex} alt="" />

                <p>AzurSwap</p>
              </a>

              <a href="#" className={styles.category__card} data-tip="Coming Soon...">
                <img src={icon_nft} className={styles.icon_nft} alt="" />
                <p>NFT Martketplace</p>
              </a>

              <a href="#" className={styles.category__card} data-tip="Coming Soon...">
                <img src={icon_game} className={styles.icon_game} alt="" />
                <p>GAMES</p>
              </a>
              <a
                href="http://azurtoken.org"
                target="_blank"
                rel="noreferrer"
                className={styles.category__card}
                data-tip="Coming Soon..."
              >
                <img src={icon_dex} className={styles.icon_dex} alt="" />

                <p>Azur Token</p>
              </a>

              <a href="#" className={styles.category__card} data-tip="Coming Soon...">
                <img src={icon_game} className={styles.icon_game} alt="" />
                <p>Metaverse</p>
              </a>

              <a href="https://t.me/Azurswap_bot" target="_blank" rel="noreferrer" className={styles.category__card}>
                <img src={icon__telegram} className={styles.icon_nft} alt="" />
                <p>Telegram Bot </p>
              </a>
            </section>

            {/* **************** Meta **************** */}
            <section className={styles.meta__section}>
              <div className={styles.meta__img}>
                <img src={project__img1} alt="" />
              </div>

              <div className={styles.meta__content}>
                <h2>Developing</h2>
                <h2>
                  and built <span className={styles.text__color}> systems</span>
                </h2>
                <p>
                  There are various systems running in the AZUR ecosystem, each of which can be briefly introduced. Each
                  part is developed using blockchain and smart contract
                </p>
                <div className={styles.accordian}>
                  <Accordion />
                </div>
              </div>
            </section>

            <section className={styles.meta__section}>
              <div className={styles.meta__content}>
                <h2>
                  Future <span className={styles.text__color}>Plans</span>
                </h2>
                <p>
                  In the near future, software for different platforms will be introduced. Also, the hardware wallet is
                  under construction and development.
                </p>

                <div className={styles.meta__box}>
                  <div className={styles.meta__card}>
                    <div className={styles.icon__basis}>
                      <img src={icon_ball} alt="" />
                    </div>
                    <p>Android App</p>
                  </div>

                  <div className={styles.meta__card}>
                    <div className={styles.icon__vr}>
                      <img src={icon_ball} alt="" />
                    </div>
                    <p>IOS App</p>
                  </div>

                  <div className={styles.meta__card}>
                    <div className={styles.icon__device}>
                      <img src={icon_ball} alt="" />
                    </div>
                    <p>Ledger</p>
                  </div>
                </div>
              </div>

              <div className={styles.meta__img}>
                <img src={project__img2} alt="" />
              </div>
            </section>

            {/* **************** Boxes **************** */}
            <section id="resources" className={styles.box}>
              <div className={styles.box__card}>
                <h2>Get started with UNDA.Quest</h2>
                <p>
                  Ruang 3D di metaverse untuk bersosialisasi, belajar, kolaborasi, dan bermain melampaui apa yang bisa
                  kita bayangkan. The Metaverse is the next evolution of social connection.
                </p>
                <a href="#" className={styles.card__btn}>
                  Get started
                </a>
              </div>
            </section>

            <section className={styles.box2}>
              <div className={styles.box2__card}>
                <h2>MetaSupport</h2>
                <p>for self hosted user, we provide you priority and bug fix guarantee, so can stop worrying</p>
                <a href="#" className={styles.card__btn}>
                  Get a Quote
                </a>
              </div>
              <div className={styles.box2__card}>
                <h2>100% Open Source</h2>
                <p>
                  Meta is infinitely extensible. Customize it,build upon it, add your apps built with UNDA Framework
                </p>
                <a href="https://github.com/AzurSwap" target="_blank" rel="noreferrer" className={styles.card__btn}>
                  View on GitHub
                </a>
              </div>
            </section>
          </section>
          {/* **************** About **************** */}
          <section id="about" className={styles.section__about}>
            <div className={styles.about__card}>
              <h2>About Us</h2>
              <p>
                The creators of the Azur ecosystem, consisting of 3 teams of developers, idea makers and investors, with
                several years of experience in the field of digital currencies, are trying to develop and expand a
                decentralized space with modern facilities. This ecosystem, having a dedicated DEX, standard token,
                metaverse and application systems in the direction of tokens, such as games and liquid locking, tries to
                build a complete environment considering the needs of the community. AzurSwap's expansion to the
                majority of blockchain networks has been the reason for choosing the desired network without any
                problems. The Azur development team tries to be effective in all introduced features by
                institutionalizing decentralized facilities Kyiv.
              </p>
            </div>
          </section>
        </section>

        <img src={img_left_team} className={styles.img_left_team} alt="" />

          {/* **************** Team **************** */}
        {/* <section className={styles.main__container}>
          <section className={styles.team}>
            <div className={styles.team__card}>
              <h2>Partners</h2>
              <div className={styles.team__profile}>
                <div>
                  <img src={azurLogo} alt="" className={styles.team__img} />
                  <p>Azur Trade and Consulting LLC</p>
                  
                </div>
                <div>
                  <img src={onyxLogo} alt="" className={styles.team__img} />
                  <p>ONYXO GmbH</p>
                  
                </div>
              </div>
            </div>
          </section>
        </section> */}

        <img src={img_right_com} className={styles.img_right_com} alt="" />

        <section className={styles.main__container}>
          {/* **************** community **************** */}
          <section id="community" className={styles.community}>
            <div className={styles.community__card}>
              <h2>Community</h2>
              <div className={styles.community__icon}>
                {/* <img src={icon__discord} alt="" />
                <img src={icon__twitter} alt="" />
                <img src={icon__gitlab} alt="" /> */}

                <SocialIcon
                  style={{ width: '80px', height: '80px' }}
                  bgColor={pcolor}
                  target="_blank"
                  rel="noreferrer"
                  url="https://discord.gg/wcc2a5Ax"
                />
                <SocialIcon
                  style={{ width: '80px', height: '80px' }}
                  bgColor={pcolor}
                  target="_blank"
                  rel="noreferrer"
                  url="https://www.instagram.com/azurtoken/"
                />
                <SocialIcon
                  style={{ width: '80px', height: '80px' }}
                  bgColor={pcolor}
                  target="_blank"
                  rel="noreferrer"
                  url="https://github.com/AzurSwap"
                />
                <SocialIcon
                  style={{ width: '80px', height: '80px' }}
                  bgColor={pcolor}
                  target="_blank"
                  rel="noreferrer"
                  url="https://medium.com/@azurtoken"
                />
                <SocialIcon
                  style={{ width: '80px', height: '80px' }}
                  bgColor={pcolor}
                  target="_blank"
                  rel="noreferrer"
                  url="https://t.me/AzurAnnouncements"
                />
                <SocialIcon
                  style={{ width: '80px', height: '80px' }}
                  bgColor={pcolor}
                  target="_blank"
                  rel="noreferrer"
                  url="https://twitter.com/AzurSwap"
                />
                <SocialIcon
                  style={{ width: '80px', height: '80px' }}
                  bgColor={pcolor}
                  target="_blank"
                  rel="noreferrer"
                  url="https://www.youtube.com/channel/UCBgTEUmxRireA3H2AHw59yw"
                />
                <SocialIcon
                  style={{ width: '80px', height: '80px' }}
                  bgColor={pcolor}
                  url="https://www.reddit.com/user/AzurSwap?utm_source=share&utm_medium=ios_app&utm_name=iossmf"
                />
              </div>
            </div>
          </section>
        </section>

        {/* **************** Footer **************** */}
        <footer className={styles.footer}>
          <div className={styles.footer__info}>
            <a href="#" className={styles.logo__footer}>
              <img src={logo} alt="" />
            </a>
            <p>
              For more communication, you can contact us using social networks. You can also contact the advertising
              department through the ads email to do your advertising
            </p>
            <div className={styles.footer__contact}>
              {/* <div>
                <img src={icon__phone} alt="" />
                <div className={styles.footer__contact__txt}>
                  <p>Phone</p>
                  <p>+49 030 67893809</p>
                </div>
              </div> */}
              <div>
                <img src={icon__mail} alt="" />
                <div className={styles.footer__contact__txt}>
                  <a href="mailto:support@azurswap.org">
                    <p>Mail</p>
                    <p>support@azurswap.org</p>
                  </a>
                </div>
              </div>
              <div>
                <img src={icon__mail} alt="" />
                <div className={styles.footer__contact__txt}>
                  <a href="mailto:info@azurswap.org">
                    <p>Mail</p>
                    <p>info@azurswap.org</p>
                  </a>
                </div>
              </div>
              <div>
                <img src={icon__mail} alt="" />
                <div className={styles.footer__contact__txt}>
                  <a href="mailto:ads@azurswap.org">
                    <p>Mail</p>
                    <p>ads@azurswap.org</p>
                  </a>
                </div>
              </div>
              {/* <div>
                <img src={icon__location} alt="" />
                <div className={styles.footer__contact__txt}>
                  <p>Address</p>
                  <p>
                    Suit No.: 4017, DBCS Building Damascus Street,
                    <br /> Dubai - 20207 UAE
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <div className={styles.footer__about}>
            <div className={styles.footer__title}>
              <p>About</p>
            </div>
            <ul className={styles.footer__links}>
              <li>
                <Link activeClass="active" smooth spy to="about">
                  About Us
                </Link>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Blog</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Careers</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Jobs</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">In Press</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer__support}>
            <div className={styles.footer__title}>
              <p>Support</p>
            </div>
            <ul className={styles.footer__links}>
              <li className={styles.disable_links}>
                <a href="#">Contact us</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Online Chat</a>
              </li>
              {/* <li className={styles.disable_links}>
                <a href="#">Whatsapp</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Telegram</a>
              </li> */}
              <li className={styles.disable_links}>
                <a href="#">Ticketing</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Call Center</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer__faq}>
            <div className={styles.footer__title}>
              <p>FAQ</p>
            </div>
            <ul className={styles.footer__links}>
              <li className={styles.disable_links}>
                <a href="#">Account</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Manage Deliveries</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Orders</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Payments</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Returns</a>
              </li>
              <li className={styles.disable_links}>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className={styles.footer__aboslute}>
            {/* <div className={styles.footer__social}>
              <img src={icon__facebook} alt="" />
              <img src={icon__linkedin} alt="" />
              <img src={icon__social} alt="" />
            </div> */}
            <div className={styles.footer__copyright}>
              <p>© 2012-2022, All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
