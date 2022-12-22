import React from 'react';
import {useNavigate} from "react-router-dom";

import Button from "../UI/button/Button";
import styles from './SectionStocks.module.scss';

const SectionStocks = () => {
  const navigate = useNavigate()
  return (
    <section className={styles['stocks__section']}>
      <h3 className={styles['stocks__title']}>
        Наши <span>акции</span>
      </h3>
      <ul className={styles['stocks__list']}>
        <li className={styles['stocks__item']}></li>
        <li className={styles['stocks__item']}></li>
        <li className={styles['stocks__item']}></li>
        <li className={styles['stocks__item']}></li>
        <li className={styles['stocks__item']}></li>
      </ul>
      <Button text={'Все акции'} callback={()=>{navigate('/stocks')}}/>
    </section>
  );
};

export default SectionStocks;