import styles from './CardProducts.module.scss';
import Button from "../UI/button/Button";

const CardProducts = ({name, img, descr, mass, price}) => {
  return (
    <li className={styles['wrapper__card']}>
      <img src={img} className={styles['card__img']} alt={name}/>
      <h3 className={styles['card__title']}>{name}</h3>
      <p className={styles['card__descr']}>{descr}{mass}</p>
      <div className={styles['card__buy']}>
        <span className={styles['card__price']}>от {price} {`\u20bd`}</span>
        <Button text={'В корзину'} callback={() => {
        }}/>
      </div>
    </li>
  );
};

export default CardProducts;