import styles from './ButtonCart.module.scss'

const ButtonCart = ({amount}) => {
  return (
    <button className={styles.button}>
      <span>Корзина</span>
      {amount > 0 && <span>{amount}</span>}
    </button>
  );
};

export default ButtonCart;