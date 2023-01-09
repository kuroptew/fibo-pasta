import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper";

import styles from './SliderHome.module.scss'

const SliderHome = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      initialSlide={1}
      watchSlidesProgress={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 6,
          width:233
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1550: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }}
    >
      <SwiperSlide className={styles['first__slider']}/>
      <SwiperSlide className={styles['second__slider']}/>
      <SwiperSlide className={styles['third__slider']}/>
      <SwiperSlide className={styles['fourth__slider']}/>
    </Swiper>
  );
};

export default SliderHome;