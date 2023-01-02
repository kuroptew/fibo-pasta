import React from 'react';
import cn from "classnames";
import styles from './Footer.module.scss'

import Logo from "../UI/logo/Logo";
import ButtonCall from "../buttonCall/ButtonCall";
import Phone from "../UI/phone/Phone";

import visaImg from '../../images/footer/visa-icon.png'
import payPalImg from '../../images/footer/paypal-icon.png'
import masterCardImg from '../../images/footer/master-card-icon.png'
import SocialList from "./socialList/SocialList";
import ContactsList from "./contactsList/ContactsList";

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__right']}>
        <div className={styles['footer__top']}>
          <Logo/>
          <div className={styles['top__call']}>
            <Phone number={'8 499 391-84-49'}/>
            <ButtonCall/>
          </div>
        </div>
        <div className={styles['footer__info']}>
          <div className={styles['footer__documentation']}>
            <a href={'https://drive.google.com/file/d/1GWaKPdU7t5URgMkh_X4pJqmyZuGr9FdQ/edit'} className={styles['info__link']} target={'_blank'}>Калорийность и состав</a>
            <a href={'#'} className={styles['info__link']} target={'_blank'}>Правовая информация</a>
          </div>
          <SocialList/>
          <div className={styles['info__bot']}>
            <p className={styles['info__copyright']}>YaBao Все права защищены {'\u00a9'} {(new Date()).getFullYear()}</p>
            <ul className={styles['info__payments']}>
              <li className={styles['payment__item']}><img src={visaImg} alt="Visa" className={styles['payment__icon']}/></li>
              <li className={styles['payment__item']}><img src={payPalImg} alt="PayPal" className={styles['payment__icon']}/></li>
              <li className={styles['payment__item']}><img src={masterCardImg} alt="Mastercard" className={styles['payment__icon']}/></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles['footer__contacts']}>
        <ContactsList/>
        <Phone number={'8 499 391-84-49'}/>
        <ButtonCall/>
      </div>
      <div className={styles['footer__row']}>
        <Phone number={'8 499 391-84-49'}/>
        <ButtonCall/>
        <ul className={styles['info__payments']}>
          <li className={styles['payment__item']}><img src={visaImg} alt="Visa" className={styles['payment__icon']}/></li>
          <li className={styles['payment__item']}><img src={payPalImg} alt="PayPal" className={styles['payment__icon']}/></li>
          <li className={styles['payment__item']}><img src={masterCardImg} alt="Mastercard" className={styles['payment__icon']}/></li>
        </ul>
      </div>
      <div className={styles['info__bot']}>
        <p className={styles['info__copyright']}>YaBao Все права защищены {'\u00a9'} {(new Date()).getFullYear()}</p>
        <ul className={styles['info__payments']}>
          <li className={styles['payment__item']}><img src={visaImg} alt="Visa" className={styles['payment__icon']}/></li>
          <li className={styles['payment__item']}><img src={payPalImg} alt="PayPal" className={styles['payment__icon']}/></li>
          <li className={styles['payment__item']}><img src={masterCardImg} alt="Mastercard" className={styles['payment__icon']}/></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;