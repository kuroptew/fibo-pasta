import React from 'react';

import Logo from "../UI/logo/Logo";
import Navbar from "../UI/navbar/Navbar";

import styles from './Header.module.scss';

import yandexLogo from '../../images/header/yandex-icon.png'
import ButtonCart from "./buttonCart/ButtonCart";
import Hamburger from "./hamburger/Hamburger";
import ButtonCall from "../buttonCall/ButtonCall";
import Phone from "../UI/phone/Phone";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__top']}>
        <Logo/>
        <div className={styles['wrapper__delivery']}>
          <div className={styles['delivery__info_top']}>
            <span>Доставка пасты</span>
            <span>Москва</span>
          </div>
          <div className={styles['delivery__info_bot']}>
            <div className={styles['delivery__company']}>
              <img src={yandexLogo} alt="ЯндексЕда Лого"/>
              <span>Яндекс</span>
              <span >4.8</span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5.05469C13 4.82031 12.75 4.72656 12.5625 4.69531L8.64062 4.125L6.88281 0.570312C6.8125 0.421875 6.67969 0.25 6.5 0.25C6.32031 0.25 6.1875 0.421875 6.11719 0.570312L4.35938 4.125L0.4375 4.69531C0.242188 4.72656 0 4.82031 0 5.05469C0 5.19531 0.101563 5.32812 0.195313 5.42969L3.03906 8.19531L2.36719 12.1016C2.35938 12.1563 2.35156 12.2031 2.35156 12.2578C2.35156 12.4609 2.45313 12.6484 2.67969 12.6484C2.78906 12.6484 2.89063 12.6094 2.99219 12.5547L6.5 10.7109L10.0078 12.5547C10.1016 12.6094 10.2109 12.6484 10.3203 12.6484C10.5469 12.6484 10.6406 12.4609 10.6406 12.2578C10.6406 12.2031 10.6406 12.1563 10.6328 12.1016L9.96094 8.19531L12.7969 5.42969C12.8984 5.32812 13 5.19531 13 5.05469Z" fill="#FFC816"/>
              </svg>
            </div>
            <div className={styles['delivery__time']}>
              <span>Время доставки</span>
              <span>от 31 мин</span>
            </div>
          </div>
        </div>
        <ButtonCall/>
        <Phone number={'8 499 391-84-49'}/>
        <ButtonCart amount={1}/>
        <Hamburger menu={Navbar}/>
      </div>
      <div className={styles['header__bot']}>
        <Navbar/>
        <ButtonCart amount={1}/>
      </div>
    </header>
  );
};

export default Header;