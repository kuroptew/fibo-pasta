import styles from './HeaderCart.module.scss'
import Logo from "../UI/logo/Logo";
import CartSteps from "../cartSteps/CartSteps";
import Hamburger from "../header/hamburger/Hamburger";

const HeaderCart = () => {
  return (
    <header className={styles['cart__header']}>
      <div  className={styles['header__top']}>
        <Logo/>
        <Hamburger/>
      </div>
      <CartSteps/>
    </header>
  );
};

export default HeaderCart;