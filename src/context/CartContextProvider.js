import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import cartReducer from './cartReducer'

const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {

  const products = [...Array(20)].map(() => (//creates an array of 20 undefined elements
    {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.business(234, 176, true),
      inStock: faker.random.numeric(1)-1, // Generates a string with 1 digit(1->9)
      // (-1 because we need to have out of stock products)
      fastDelivery: faker.datatype.boolean(),
      ratings: Math.ceil(faker.random.numeric(1)/2) // Divided by 2 to get 1->5.
                                        //! Dividing it transforms it to number
    }
  )) // creates 20 objects with keys equalt to id, name, price
   // etc and values given by faker API

  const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart: []
  })

  const addToCart = (prod) => {
    dispatch({type:"ADD_TO_CART", payload: prod})
  }
  
  const removeFromCart = (id) => {
    dispatch({type:"REMOVE_FROM_CART", payload: id})
  }

  const changeCartQuantity = (id, newQuantity) => {
    console.log(id, newQuantity)
    dispatch({type:"CHANGE_CART_QUANTITY", payload: {id, qty: newQuantity}})
  }

  return(
    <CartContext.Provider
        value={{
            state,
            addToCart,
            removeFromCart,
            changeCartQuantity
        }}
    >
      { children }
    </CartContext.Provider>
  )

}

export const useCartContext = () => useContext(CartContext)