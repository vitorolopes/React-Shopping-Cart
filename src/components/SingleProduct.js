import React from 'react';
import '../styles.css';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import { useShopContext } from '../context/ShopContextProvider';


const SingleProduct = ({prod}) => {

  const {cartState:{cart}, addToCart, removeFromCart} = useShopContext()

  return (
    <div className='products'>
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />     

        <Card.Body>

          <Card.Title>{prod.name}</Card.Title>

          <Card.Subtitle style={{paddingBottom: 10}}>
            <span>€ {prod.price.split(".")[0]} </span>
            {
              prod.fastDelivery
              ?
               <div>Fast Delivery</div>
              :
               <div>4 Days Delivery</div> 
            }
            <Rating rating={prod.ratings}/>
          </Card.Subtitle>

          {
            cart.some(item => item.id === prod.id)
            ?
              ( <Button variant='danger'
                  onClick={ () => removeFromCart(prod.id)}
                >
                  Remove from Cart
               </Button>)
            :
              ( <Button
                  disabled={prod.inStock === 0}
                  onClick={ () => addToCart(prod)}
                >
                  {prod.inStock === 0 ? "Out of Stock" : "Add to Cart"}
                </Button>)
          }

        </Card.Body>

      </Card>
    </div>
  )
}

export default SingleProduct