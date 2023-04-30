import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Shop } from './pages/shop/shop';
import { Mouse } from './pages/shop/mouse';
import { Keyboard } from './pages/shop/keyboard';
import { Chair } from './pages/shop/chair';
import { DeskMats } from './pages/shop/deskMat';
import { Cart } from './pages/cart/cart';
import { ItemListContainer } from "./components/ItemListContainer"
import { AccessoryDetail } from "./components/accessoryDetail";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ItemListContainer greeting={'Welcome to your Gaming Spot'}/>
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/mouse" element={<Mouse />}/>
          <Route path="/keyboards" element={<Keyboard />}/>
          <Route path="/chairs" element={<Chair />}/>
          <Route path="/deskmats" element={<DeskMats />}/>
          <Route path="/:productCategory/:productId" element={<AccessoryDetail />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;

