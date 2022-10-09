import React from 'react';
import { useShopContext } from '../context/ShopContextProvider';
import Filters from './Filters';
import SingleProduct from './SingleProduct'

const Home = () => {

  const {cartState:{products}} = useShopContext()
  
  return (
    <div className='home'>
      <Filters/>
      <div className="productContainer">
        {
          products.map( prod => {
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home

