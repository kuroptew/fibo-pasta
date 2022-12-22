import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import SectionCategory from "../../sectionCategory/SectionCategory";
import styles from './Home.module.scss'

import {arrDishesPizza, arrDishesPasta, arrDishesSalads ,arrNewProducts } from "./data";

import SectionNewProducts from "../../sectionNewProducts/SectionNewProducts";
import SectionStocks from "../../sectionStocks/SectionStocks";
import SectionDelivery from "../../sectionDelivery/SectionDelivery";

const Home = () => {
  return (
    <main className={styles.main}>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={30}
        slidesPerView={2}
        initialSlide={1}
        watchSlidesProgress={true}
      >
        <SwiperSlide className={styles['first__slider']}/>
        <SwiperSlide className={styles['second__slider']}/>
        <SwiperSlide className={styles['third__slider']}/>
        <SwiperSlide className={styles['fourth__slider']}/>
      </Swiper>
      <div className={styles['wrapper__offers']}>
        <SectionNewProducts arrNewProducts={arrNewProducts}/>
        <SectionCategory categoryName={'Паста'} arrDishes={arrDishesPasta} />
        <SectionCategory categoryName={'Пицца'} arrDishes={arrDishesPizza} />
        <SectionCategory categoryName={'Салаты'} arrDishes={arrDishesSalads} />
        <SectionStocks/>
      </div>
      <SectionDelivery/>
    </main>


  );
};

export default Home;