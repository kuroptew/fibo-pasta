import React from 'react';

import styles from './CardDelivery.module.scss';


const CardDelivery = ({img, text}) => {
  return (
    <li className={styles['delivery__card']}
    >
      <img src={img} alt="Иконка доставки"/>
      <p className={styles['delivery__descr']}>{text}</p>
    </li>
  );
};

export default CardDelivery;