import styles from './ButtonCart.module.scss'

const ButtonCart = ({amount}) => {
  return (
    <button className={styles.button}>
      <span>Корзина</span>
      <span>{amount}</span>
    </button>
  );
};

export default ButtonCart;