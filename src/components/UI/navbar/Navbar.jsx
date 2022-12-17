import React from 'react';
import {NavLink} from 'react-router-dom'

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li>
          <NavLink className={styles['menu__link']}>Пицца</NavLink>
        </li>
        <li>
          <NavLink className={styles['menu__link']}>Паста</NavLink>
        </li>
        <li>
          <NavLink className={styles['menu__link']}>Супы</NavLink>
        </li>
        <li>
          <NavLink className={styles['menu__link']}>Салаты</NavLink>
        </li>
        <li>
          <NavLink className={styles['menu__link']}>Напитки</NavLink>
        </li>
        <li>
          <NavLink className={styles['menu__link']}>Десерты</NavLink>
        </li>
        <li>
          <NavLink className={styles['menu__link']}>Бакалея</NavLink>
        </li>
        <li>
          <NavLink className={styles['menu__link']}>Антипасти</NavLink>
        </li>
        <li>
          <NavLink
            className={styles['menu__link']}
            to='/stocks'>
            Акции
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles['menu__link']}
            to='/combo'>
            Комбо
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles['menu__link']}
            to='/contacts'>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;