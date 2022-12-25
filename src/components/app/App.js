import Header from "../header/Header";

import '../../style/style.scss';
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import {Routes, Route} from "react-router-dom";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className='container'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
