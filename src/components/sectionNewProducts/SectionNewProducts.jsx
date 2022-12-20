import React from 'react';

import MiniCardProducts from "../miniCardProducts/MiniCardProducts";

import styles from './SectionNewProducts.module.scss'

const SectionNewProducts = ({arrNewProducts}) => {
  return (
    <section className={styles['new-products__section']}>
      <h2 className={styles['section__title']}>Новинки</h2>
      <ul className={styles['section__list']}>
        {arrNewProducts.map(({name, img, price})=>
          <MiniCardProducts price={price} img={img} name={name}/>
        )}
      </ul>
    </section>
  );
};

export default SectionNewProducts;