import React from 'react';

import styles from './MiniCard.module.scss'

const MiniCardProducts = ({name, img, price}) => {
  return (
    <li className={styles['wrapper__card_mini']}>
      <img src={img} className={styles['card__img_mini']}/>
      <div>
        <h3 className={styles['card__title_mini']}>{name}</h3>
        <div className={styles['card__price_mini']}>от {price}</div>
      </div>
    </li>
  );
};

export default MiniCardProducts;