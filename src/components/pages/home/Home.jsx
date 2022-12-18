import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";

import styles from './Home.module.scss'



const Home = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={30}
      slidesPerView={2}
      initialSlide={1}
      watchSlidesProgress={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles['first__slider']}/>
      <SwiperSlide className={styles['second__slider']}/>
      <SwiperSlide className={styles['third__slider']}/>
      <SwiperSlide className={styles['fourth__slider']}/>
    </Swiper>
  );
};

export default Home;