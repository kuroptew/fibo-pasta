import {useState} from "react";
import cn from 'classnames';

import ButtonCart from "../buttonCart/ButtonCart";
import Navbar from "../../UI/navbar/Navbar";

import styles from './Hamburger.module.scss';


const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={styles.hamburger}>
      <button
        className={cn(styles['icon__menu'], {
          [styles['icon__menu_close']]: showMenu,
        })

        }
        onClick={() => {
          setShowMenu(!showMenu)
        }}
      >
        <span></span>

      </button>
      {showMenu ?
        <div className={styles['hamburger__menu']}>
          <Navbar/>
          <a href={'tel:+74993918449'} className={styles.tel}>8 499 391-84-49</a>
          <ButtonCart amount={1}/>
        </div>
        : null
      }
    </div>
  );
};

export default Hamburger;