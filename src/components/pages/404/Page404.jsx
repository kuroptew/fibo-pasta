import React from 'react';

import styles from './Page404.module.scss'
import pizzaImg from '../../../images/pizza.svg'
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const Page404 = () => {
  return (
    <>
      <Header/>
      <main className={styles['wrapper']}>
        <div className={styles['error__code']}>
          <span>4</span>
          <img src={pizzaImg} alt="Пицца" className={styles['pizza']}></img>
          <span>4</span>
        </div>
        <h1 className={styles['title']}>Страница <span>не найдена</span></h1>
      </main>
      <Footer/>
    </>
);
};

export default Page404;