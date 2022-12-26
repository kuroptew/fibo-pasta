import React from 'react';

import styles from './Stocks.module.scss'

import {
  arrStocks
} from "./data";
import CardStock
  from "../../cardStock/CardStock";

const Stocks = () => {
  return (
    <main className={styles['stocks__wrapper']}>
      <h1 className={styles['stocks__title']}>Акции</h1>
      <ul className={styles['stocks__list']}>
        {
          arrStocks.map(({id,img, title, descr})=> <CardStock key={id} img={img} title={title} descr={descr} />)
        }
      </ul>
    </main>
  );
};

export default Stocks;