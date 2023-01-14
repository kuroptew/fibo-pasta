import styles from './HeaderCart.module.scss'
import Logo from "../UI/logo/Logo";
import CartSteps from "../cartSteps/CartSteps";

const HeaderCart = () => {
  return (
    <header className={styles['cart__header']}>
      <Logo/>
      <CartSteps/>
    </header>
  );
};

export default HeaderCart;