import React from 'react';
import styles from './Phone.module.scss'

const Phone = ({number}) => {
  return (
    <a href={`tel:${number}`} className={styles.phone}>{number}</a>
  );
};

export default Phone;