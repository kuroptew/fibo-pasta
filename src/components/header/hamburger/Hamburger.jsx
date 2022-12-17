import styles from './Hamburger.module.scss'

const Hamburger = () => {
  return (
    <button className={styles['icon__menu']}>
      <span></span>
    </button>

  );
};

export default Hamburger;