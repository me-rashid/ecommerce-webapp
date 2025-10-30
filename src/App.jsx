
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Collection from './pages/Collection'
import Orders from './pages/Orders'
import Navbar from './componenets/Navbar'



function App() {

  return (
   <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
     <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/place-order' element={<PlaceOrder />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/collection' element={<Collection />} />

    </Routes>
    </div>
  )
}

export default App