import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import {cartReducer} from './reducers'
import {filterReducer} from './reducers'

const ShopContext = createContext()

export const ShopContextProvider = ( {children} ) => {
//* CART
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

  const [cartState, cartDispatch] = useReducer(cartReducer, {
      products: products,
      cart: []
  })

  const addToCart = (prod) => {
    cartDispatch({type:"ADD_TO_CART", payload: prod})
  }
  
  const removeFromCart = (id) => {
    cartDispatch({type:"REMOVE_FROM_CART", payload: id})
  }

  const changeCartQuantity = (id, newQuantity) => {
    console.log(id, newQuantity)
    cartDispatch({type:"CHANGE_CART_QUANTITY", payload: {id, qty: newQuantity}})
  }
//* FILTERS
  const filterInitialState = {byStock: false, byFastDelivery: false, byRating: 0, searchQuery: ""}
  const [filterState, filterDispatch] = useReducer(filterReducer, filterInitialState)

  const filterByRating = (ratingFilter) => {
     filterDispatch({type: "FILTER_BY_RATING", payload: ratingFilter})
  }

  const sortByPriceIn = (ascORdesc) => { 
      filterDispatch(
        {
          type: "SORT_BY_PRICE",
          payload: ascORdesc
        }
      )
  }

  const filterByStock = () => { 
    filterDispatch({type: "FILTER_BY_STOCK"})
  }

  const filterByFastDelivery = () => { 
    filterDispatch({type: "FILTER_BY_FAST_DELIVERY"})
  }

  const clearFilters = () => { 
    filterDispatch({type: "CLEAR_FILTERS"})
  }

  const filterBySearch = (newSearchTerm) => {
    filterDispatch({type: "FILTER_BY_SEARCH", payload: newSearchTerm})
  }

  return(
    <ShopContext.Provider
        value={{
            cartState,
            addToCart,
            removeFromCart,
            changeCartQuantity,
            filterState,
            filterByRating,
            sortByPriceIn,
            filterByStock,
            filterByFastDelivery,
            clearFilters,
            filterBySearch
        }}
    >
      { children }
    </ShopContext.Provider>
  )

}

export const useShopContext = () => useContext(ShopContext)