import React from 'react';
import cn from "classnames";
import styles from './Footer.module.scss'

import Logo from "../UI/logo/Logo";
import ButtonCall from "../buttonCall/ButtonCall";
import Phone from "../UI/phone/Phone";

import visaImg from '../../images/footer/visa-icon.png'
import payPalImg from '../../images/footer/paypal-icon.png'
import masterCardImg from '../../images/footer/master-card-icon.png'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__info']}>
        <Logo/>
        <a href={'https://drive.google.com/file/d/1GWaKPdU7t5URgMkh_X4pJqmyZuGr9FdQ/edit'} className={styles['info__link']} target={'_blank'}>Калорийность и состав</a>
        <a href={'#'} className={styles['info__link']} target={'_blank'}>Правовая информация</a>
        <div className={styles['footer__socials']}>
          <h3 className={styles['socials__title']}>Мы в соцсетях</h3>
          <ul className={styles['socials__list']}>
            <li className={styles['socials__item']}><a href="https://www.youtube.com/" className={styles['socials__link']} target={'_blank'}>YouTube</a></li>
            <li className={styles['socials__item']}><a href="https://www.facebook.com/" className={styles['socials__link']} target={'_blank'}>Facebook</a></li>
            <li className={styles['socials__item']}><a href="https://www.instagram.com/" className={styles['socials__link']} target={'_blank'}>Instagram</a></li>
            <li className={styles['socials__item']}><a href="https://www.vk.com/" className={styles['socials__link']} target={'_blank'}>Вконтакте</a></li>
            <li className={styles['socials__item']}><address className={styles['footer__address']}>Москва ул. Проспект Вернадского 86В</address></li>
          </ul>
        </div>

        <div className={styles['info__bot']}>
          <p>YaBao Все права защищены {'\u00a9'} {(new Date()).getFullYear()}</p>
          <ul className={styles['info__payments']}>
            <li className={styles['payment__item']}><img src={visaImg} alt="Visa" className={styles['payment__icon']}/></li>
            <li className={styles['payment__item']}><img src={payPalImg} alt="PayPal" className={styles['payment__icon']}/></li>
            <li className={styles['payment__item']}><img src={masterCardImg} alt="Mastercard" className={styles['payment__icon']}/></li>
          </ul>
        </div>
      </div>
      <div className={styles['footer__contacts']}>
        <h3 className={styles['contacts__title']}>Остались вопросы? А мы всегда на связи:
        </h3>
        <ul className={styles['contacts__list']}>
          <li className={styles['contacts__item']}>
            <button className={styles['contacts__button']}>
              <a href="" className={cn(styles['contacts__link'], styles['contacts__link_viber'])}>
              </a>
            </button>
          </li>
          <li className={styles['contacts__item']}>
            <button className={styles['contacts__button']}>
              <a href="" className={cn(styles['contacts__link'], styles['contacts__link_skype'])}>
              </a>
            </button>
          </li>
          <li className={styles['contacts__item']}>
            <button className={styles['contacts__button']}>
              <a href="" className={cn(styles['contacts__link'], styles['contacts__link_facebook-messenger'])}>
              </a>
            </button>
          </li>
          <li className={styles['contacts__item']}>
            <button className={styles['contacts__button']}>
              <a href="" className={cn(styles['contacts__link'], styles['contacts__link_telegram'])}>
              </a>
            </button>
          </li>
          <li className={styles['contacts__item']}>
            <button className={styles['contacts__button']}>
              <a href="" className={cn(styles['contacts__link'], styles['contacts__link_facebook'])}>
              </a>
            </button>
          </li>
          <li className={styles['contacts__item']}>
            <button className={styles['contacts__button']}>
              <a href="" className={cn(styles['contacts__link'], styles['contacts__link_vk'])}>
              </a>
            </button>
          </li>
          <li className={styles['contacts__item']}>
            <button className={styles['contacts__button']}>
                Написать нам
            </button>
          </li>
        </ul>
        <Phone number={'8 499 391-84-49'}/>
        <ButtonCall/>
      </div>
    </footer>
  );
};

export default Footer;