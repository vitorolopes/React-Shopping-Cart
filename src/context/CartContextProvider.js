import React, { createContext, useContext } from 'react';
import { faker } from '@faker-js/faker';

const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {

  const dummyValue = "This is a dummy value"

  const products = [...Array(20)].map(() => (
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


  console.log(products);

  return(
    <CartContext.Provider
        value={{
            dummyValue
        }}
    >
      { children }
    </CartContext.Provider>
  )

}

export const useCartContext = () => useContext(CartContext)