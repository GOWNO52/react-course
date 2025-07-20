import React, { Suspense, lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Products = lazy(() => import('../pages/Products'))
const Cart = lazy(() => import('../pages/Cart'))

function Loading() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
      </nav>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Loading
