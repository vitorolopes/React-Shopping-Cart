import React from 'react';
import { useShopContext } from '../context/ShopContextProvider';
import Filters from './Filters';
import SingleProduct from './SingleProduct'

const Home = () => {

  const {cartState:{products},
         filterState:{sortIn, byStock, byFastDelivery, byRating, searchQuery}}
          = useShopContext()
  
  const transformedProducts = () => { 
    let sortedProducts = products

    if(sortIn){
      sortedProducts = sortedProducts.sort((a,b) => 
        sortIn === "ascending" ? a.price - b.price : b.price - a.price
      )
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter( prod => prod.inStock)
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter( prod => prod.fastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter( prod => prod.ratings >= byRating)
    }

    if(searchQuery) {
      sortedProducts = sortedProducts.filter ( prod => 
        prod.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts
   }


  return (
    <div className='home'>
      <Filters/>
      <div className="productContainer">
        {
          // products.map( prod => {
          transformedProducts().map( prod => {
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home

