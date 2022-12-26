import React from 'react';

import styles from './CardStock.module.scss'
import Button
  from "../UI/button/Button";

const CardStock = ({img, title, descr}) => {
  return (
    <li className={styles['stock__card']}>
      <img src={img} alt="Картинка акции" className={styles['stock__img']}/>
      <div className={styles['stock__info']}>
        <h2 className={styles['stock__title']}>{title}</h2>
        <p className={styles['stock__descr']}>{descr}</p>
        <Button text={'Посмотреть'} callback={()=>{}}/>
      </div>
    </li>
  );
};

export default CardStock;