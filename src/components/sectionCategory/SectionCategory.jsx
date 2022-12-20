import React from 'react';

import styles from './SectionCategory.module.scss'
import CardProducts from "../cardProduct/CardProducts";

const SectionCategory = ({categoryName, arrDishes}) => {
  return (
    <section className={styles['category__section']}>
      <h2 className={styles['category__title']}>{categoryName}</h2>
      <ul className={styles['category__list']}>
        {arrDishes.map(({id, name, img, descr, mass, price})=>
          <CardProducts key={id} name={name} img={img} descr={descr} price={price} mass={mass}/>
        )}
      </ul>

    </section>
  );
};

export default SectionCategory;