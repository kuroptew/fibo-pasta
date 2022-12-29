import React from 'react';

import styles from './Logo.module.scss';

import logo from '../../../images/logo.png'
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
      <img src={logo} className={styles.logo}
      >
      </img>
    </Link>
  );
};

export default Logo;