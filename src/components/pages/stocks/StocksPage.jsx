import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAll, fetchStocks} from "./stocksSlice";
import {store} from "../../../store";

import styles from './Stocks.module.scss'


import CardStock
  from "../../cardStock/CardStock";
import Spinner from "../../spinner/Spinner";



const StocksPage = () => {
  const stocks = selectAll(store.getState())

  const {stocksLoadingStatus} = useSelector(state => state.stocks)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStocks())
  }, [])

  if (stocksLoadingStatus === "loading") {
    return <Spinner/>;
  } else if (stocksLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  return (
    <main className={styles['stocks__wrapper']}>
      <h1 className={styles['stocks__title']}>Акции</h1>
      <ul className={styles['stocks__list']}>
        {
          stocks.map(({id, img, title, descr}) => <CardStock key={id} img={img} title={title}
                                                                descr={descr}/>)
        }
      </ul>
    </main>
  );
};

export default StocksPage;