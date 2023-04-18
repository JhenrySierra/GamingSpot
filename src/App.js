import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ItemListContainer } from "./components/ItemListContainer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ItemListContainer greeting={'Welcome to your Gaming Spot'}/>
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
