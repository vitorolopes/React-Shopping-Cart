import React from 'react';
import { useCartContext } from '../context/CartContextProvider';
import Filters from './Filters';
import SingleProduct from './SingleProduct'

const Home = () => {

  const {state:{products}} = useCartContext()
  
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

