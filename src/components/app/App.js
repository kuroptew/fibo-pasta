import Header from "../header/Header";

import '../../style/style.scss';
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
