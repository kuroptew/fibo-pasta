import React from 'react';


import styles from './SectionDelivery.module.scss';
import CardDelivery from "../cardDelivery/CardDelivery";


import {ReactComponent as PayDelivery}  from '../../images/pay-delivery.svg';
import {ReactComponent as CarDelivery}  from '../../images/car-delivery.svg';
import {ReactComponent as SuccessDelivery}  from '../../images/success-delivery.svg';
import {ReactComponent as CarWithTimeDelivery}  from '../../images/car-with-time-delivery.svg';
import DeliveryMap from "../deliveryMap/DeliveryMap";

const SectionDelivery = ({}) => {

  return (
    <div className={styles['delivery__section']}>
      <h2 className={styles['delivery__title']}>Оплата и доставка</h2>
      <ul className={styles['delivery__list']}>
        <CardDelivery img={<PayDelivery/>} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
        <CardDelivery img={<CarDelivery/>} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
        <CardDelivery img={<SuccessDelivery/>} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
        <CardDelivery img={<CarWithTimeDelivery/>} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
      </ul>
      <DeliveryMap/>
    </div>
  );
};

export default SectionDelivery;