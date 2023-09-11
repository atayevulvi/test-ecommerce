import Home from './pages/Home'
import Men from './pages/Men';
import Women from './pages/Women'
import Kids from './pages/Kids'
import Products from './pages/Products'
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home/>}/>
        <Route path='women' element={<Women />} />
        <Route path='men' element={<Men/>}/>
        <Route path='kids' element={<Kids/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
