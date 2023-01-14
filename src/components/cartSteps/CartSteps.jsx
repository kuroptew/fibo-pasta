import cn from 'classnames'

import styles from './CartSteps.module.scss'
import {useState} from "react";

const CartSteps = () => {
  const [activeStep, setActiveStep] = useState(2)


  return (
    <ul className={styles['cart__steps']}>
      <li className={cn(styles['cart__step'], {
        [styles['cart__step_active']]: activeStep === 1
      })}>
        <div className={styles['step__circle']}>1</div>
        <h3 className={styles['step__name']}>Корзина</h3>
      </li>

      <li className={cn(styles['cart__step'], {
        [styles['cart__step_active']]:activeStep === 2
      })}>
        <div className={styles['step__circle']}>2</div>
        <h3 className={styles['step__name']}>Оформление заказа</h3>
      </li>
      <li className={cn(styles['cart__step'], {
        [styles['cart__step_active']]:activeStep === 3
      })}>
        <div className={styles['step__circle']}>3</div>
        <h3 className={styles['step__name']}>Заказ принят</h3>
      </li>
    </ul>
  );
};

export default CartSteps;