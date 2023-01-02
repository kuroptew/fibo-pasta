import React from 'react';
import styles from './SocialList.module.scss'

const SocialList = () => {
  return (
    <div className={styles['footer__socials']}>
      <h3 className={styles['socials__title']}>Мы в соцсетях</h3>
      <ul className={styles['socials__list']}>
        <li className={styles['socials__item']}><a href="https://www.youtube.com/" className={styles['socials__link']} target={'_blank'}>YouTube</a></li>
        <li className={styles['socials__item']}><a href="https://www.facebook.com/" className={styles['socials__link']} target={'_blank'}>Facebook</a></li>
        <li className={styles['socials__item']}><a href="https://www.instagram.com/" className={styles['socials__link']} target={'_blank'}>Instagram</a></li>
        <li className={styles['socials__item']}><a href="https://www.vk.com/" className={styles['socials__link']} target={'_blank'}>Вконтакте</a></li>
        <li className={styles['socials__item']}><address className={styles['footer__address']}>Москва ул.Проспект Вернадского 86В</address></li>
      </ul>
    </div>
  );
};

export default SocialList;