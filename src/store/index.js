import {configureStore} from "@reduxjs/toolkit";
import stocks from '../components/pages/stocks/stocksSlice';
import pizzas from '../components/pages/home/slices/pizzasSlice'

export const store = configureStore({
  reducer: {stocks, pizzas},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})