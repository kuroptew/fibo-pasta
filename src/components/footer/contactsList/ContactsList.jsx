import React from 'react';
import cn from "classnames";

import styles from './ContactsList.module.scss'

const ContactsList = () => {
  return (
    <>
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
    </>
  );
};

export default ContactsList;