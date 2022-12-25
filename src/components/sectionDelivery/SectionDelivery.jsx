import React from 'react';


import styles from './SectionDelivery.module.scss';
import CardDelivery from "../cardDelivery/CardDelivery";


import PayDelivery  from '../../images/homepage/delivery/pay-delivery.png';
import CarDelivery  from '../../images/homepage/delivery/car-delivery.png';
import SuccessDelivery from '../../images/homepage/delivery/success-delivery.png';
import CarWithTimeDelivery  from '../../images/homepage/delivery/time-delivery.png';
import DeliveryMap from "../deliveryMap/DeliveryMap";

const SectionDelivery = () => {
  return (
    <div className={styles['delivery__section']}>
      <h2 className={styles['delivery__title']}>Оплата и доставка</h2>
      <ul className={styles['delivery__list']}>
        <CardDelivery img={PayDelivery} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
        <CardDelivery img={CarDelivery} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
        <CardDelivery img={SuccessDelivery} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
        <CardDelivery img={CarWithTimeDelivery} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
      </ul>
      <DeliveryMap/>
    </div>
  );
};

export default SectionDelivery;