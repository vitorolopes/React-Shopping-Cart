import React from 'react';
import { useCartContext } from '../context/CartContextProvider';
import SingleProduct from './SingleProduct'

const Home = () => {

  const {state:{products}} = useCartContext()
  
  return (
    <div className='Home'>
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

