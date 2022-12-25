import React from 'react';
import styles from './Phone.module.scss'

const Phone = () => {
  return (
    <a href={'tel:+74993918449'} className={styles.phone}>8 499 391-84-49</a>
  );
};

export default Phone;