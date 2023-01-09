import SectionCategory from "../../sectionCategory/SectionCategory";
import styles from './Home.module.scss'

import {arrDishesPizza, arrDishesPasta, arrDishesSalads, arrNewProducts} from "./data";

import SectionNewProducts from "../../sectionNewProducts/SectionNewProducts";
import SectionStocks from "../../sectionStocks/SectionStocks";
import SectionDelivery from "../../sectionDelivery/SectionDelivery";
import SliderHome from "../../sliderHome/SliderHome";
import {selectAll, fetchPizzas} from "./slices/pizzasSlice";
import {store} from "../../../store";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Spinner from "../../spinner/Spinner";


const Home = () => {
  const pizzas= selectAll(store.getState())
  const {pizzasLoadingStatus} = useSelector(state => state.pizzas)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPizzas())
  }, [])


  return (
    <main className={styles['home__wrapper']}>
      <SliderHome/>
      <div className={styles['wrapper__offers']}>
        <SectionNewProducts arrNewProducts={arrNewProducts}/>
        {
          pizzasLoadingStatus === "loading" ?
            <Spinner/>
            :
            pizzasLoadingStatus === "error" ?
              <h5 className="text-center mt-5">Ошибка загрузки</h5>
              :
              <SectionCategory categoryName={'Пицца'} arrDishes={pizzas}/>
        }
        {/*<SectionCategory categoryName={'Пицца'} arrDishes={arrDishesPizza}/>*/}
        {/*<SectionCategory categoryName={'Салаты'} arrDishes={arrDishesSalads}/>*/}
        {/*<SectionStocks/>*/}
      </div>
      <SectionDelivery/>
    </main>
  );
};

export default Home;