import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Card from "../../card/Card";
import styles from './Home.module.scss'

import imgCard from '../../../images/pizza-four-cheese.png'

const Home = () => {
  return (
    <>
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
      <ul style={{display:'flex', flexWrap:"wrap", padding: '0 220px'}}>
        <Card
          name={'С креветками и трюфелями'}
          img={imgCard}
          descr={'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г\n'}
          mass = {'350г'}
          price={600}
        />
        <Card
          name={'С креветками и трюфелями'}
          img={imgCard}
          descr={'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.'}
          mass = {'350г'}
          price={600}
        />
        <Card
          name={'С креветками и трюфелями'}
          img={imgCard}
          descr={'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г\n'}
          mass = {'350г'}
          price={600}
        />
        <Card
          name={'С креветками и трюфелями'}
          img={imgCard}
          descr={'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.'}
          mass = {'350г'}
          price={600}
        />
        <Card
          name={'С креветками и трюфелями'}
          img={imgCard}
          descr={'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г\n'}
          mass = {'350г'}
          price={600}
        />
        <Card
          name={'С креветками и трюфелями'}
          img={imgCard}
          descr={'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.'}
          mass = {'350г'}
          price={600}
        />
        <Card
          name={'С креветками и трюфелями'}
          img={imgCard}
          descr={'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г\n'}
          mass = {'350г'}
          price={600}
        />
        <Card
          name={'С креветками и трюфелями'}
          img={imgCard}
          descr={'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.'}
          mass = {'350г'}
          price={600}
        />

      </ul>

    </>


  );
};

export default Home;