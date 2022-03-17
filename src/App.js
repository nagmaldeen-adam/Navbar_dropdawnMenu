import './App.css';
import Navbar from './component/JsFiles/navbar';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Home from './component/pages/home';
import Product from './component/pages/product';
import  Contact from './component/pages/contact';
import Sign from './component/pages/singup';
import  Consult from './component/pages/consulting';
import Service from './component/pages/service';
import Market from './component/pages/markting.js';
import Design from './component/pages/design.js';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' exact element={<Home />} ></Route>
       <Route path='/marketing' exact element={<Market />} ></Route>
       <Route path='/services' exact element={<Service />} ></Route>
       <Route path='/consulting' exact element={<Consult />} ></Route>
       <Route path='/sing' exact element={<Sign />} ></Route>
       <Route path='/contact' exact element={<Contact />} ></Route>
       <Route path='/product' exact element={<Product />} ></Route>
       <Route path='/design' exact element={<Design />} ></Route>
     </Routes>
    </Router>
    </>
  );
}

export default App;
