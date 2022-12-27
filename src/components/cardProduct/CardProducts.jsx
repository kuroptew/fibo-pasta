import styles from './CardProducts.module.scss';
import Button from "../UI/button/Button";

const CardProducts = ({name, img, descr, mass, price}) => {
  return (
    <li className={styles['product__card']}>
      <div className={styles['product__info']}>
        <img src={img} className={styles['product__img']} alt={name}/>
        <div className={styles['product__text']}>
          <h3 className={styles['product__title']}>{name}</h3>
          <p className={styles['product__descr']}>{descr}{mass}</p>
        </div>
      </div>
      <div className={styles['product__buy']}>
        <span className={styles['product__price']}>от {price} {`\u20bd`}</span>
        <Button text={'В корзину'} callback={() => {
        }}/>
      </div>
    </li>
  );
};

export default CardProducts;