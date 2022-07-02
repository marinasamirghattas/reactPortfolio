import Counter from "./view/counter/counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import About from "./components/about/about";
import Todo from "./view/todo/Todo";
import Product from "./components/productDetails/product";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="container text-center">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/contactUs" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
