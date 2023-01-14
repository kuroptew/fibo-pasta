import {Routes, Route} from "react-router-dom";

import '../../style/style.scss';

import Header from "../header/Header";
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import Footer from "../footer/Footer";
import Page404 from "../pages/404/Page404";
import StocksPage from "../pages/stocks/StocksPage";
import CartPage from "../pages/cart/CartPage";

function App() {
  return (
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/stocks' element={<StocksPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </div>
  );
}

export default App;
