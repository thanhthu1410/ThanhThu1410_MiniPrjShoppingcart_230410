import React, { useState } from 'react'
import ListProducts from './component/ListProducts'
import Cart from './component/Cart'
import { useDispatch, useSelector } from 'react-redux'

export default function AddToCartRedux() {

  const store = useSelector(state => state.store)
  return (
    <div className='container'>
      <ListProducts productStore={store.products} />
      <Cart cartStore={store.cart}/>
    </div>
  )
}
