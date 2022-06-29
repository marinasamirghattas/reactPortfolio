
import Counter from './view/counter';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Shop from './components/shop/shop';
import About from './components/about/about';
import Product from './components/productDetails/product';

function App() {
  return (
    <div className='container text-center'>

  <BrowserRouter>
  <NavBar></NavBar>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/counter' element={<Counter/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/shop/:id' element={<Product/>}></Route>
    <Route path='/about' element={<About/>}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
