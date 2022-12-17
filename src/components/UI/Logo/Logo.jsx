import React from 'react';

import styles from './Logo.module.scss';

import logo from '../../../images/logo.png'

const Logo = () => {
  return (
    <img src={logo} className={styles.logo}>
    </img>
  );
};

export default Logo;