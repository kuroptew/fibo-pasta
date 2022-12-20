import React from 'react';
import styles from './Stocks.module.scss'

const Stocks = () => {
  return (
    <section>
      <h3 className={styles['stocks__title']}>
        Наши <span>акции</span>
      </h3>
    </section>
  );
};

export default Stocks;