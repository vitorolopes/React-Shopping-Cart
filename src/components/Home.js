import React from 'react';
import { useCartContext } from '../context/CartContextProvider';


const Home = () => {

  const {dummyValue} = useCartContext()
  console.log(dummyValue);

  return (
    <div>Home</div>
  )
}

export default Home

