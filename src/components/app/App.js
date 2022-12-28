import {Routes, Route} from "react-router-dom";


import '../../style/style.scss';

import Header from "../header/Header";
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import Footer from "../footer/Footer";
import Stocks from "../pages/stocks/Stocks";
import Page404 from "../pages/404/Page404";

function App() {
  return (
    <div className='container'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/stocks' element={<Stocks/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
