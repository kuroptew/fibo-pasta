import {configureStore} from "@reduxjs/toolkit";
import stocks from '../components/pages/stocks/stocksSlice'

export const store = configureStore({
  reducer: {stocks},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})