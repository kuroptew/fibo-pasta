import React from 'react';

import styles from './Button.module.scss'

const Button = ({text, callback}) => {
  return (
    <button className={styles.button} onClick={callback}>
      {text}
    </button>
  );
};

export default Button;