import React from 'react';

import styles from './ButtonCall.module.scss'

const ButtonCall = () => {
  return (
    <button className={styles['button__call']}>Заказать звонок</button>
  );
};

export default ButtonCall;