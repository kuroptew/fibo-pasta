import {useState} from "react";
import cn from 'classnames';

import Navbar from "../../UI/navbar/Navbar";
import buttonCart from "../buttonCart/ButtonCart";

import styles from './Hamburger.module.scss';
import ButtonCart from "../buttonCart/ButtonCart";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
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
      {showMenu ?
        <div className={styles['hamburger__menu']}>
          <Navbar/>
          <a href={'tel:+74993918449'} className={styles.tel}>8 499 391-84-49</a>
          <ButtonCart amount={1}/>
        </div>
        : null
      }

    </button>


    // <button className={styles['icon__menu']}>
    //   <span></span>
    // </button>


  );
};

export default Hamburger;