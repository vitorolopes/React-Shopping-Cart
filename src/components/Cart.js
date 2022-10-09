import React, {useState, useEffect} from 'react';
import { ListGroup, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { useShopContext } from '../context/ShopContextProvider';
import Rating from './Rating';


const Cart = () => {

  const {cartState:{cart}, removeFromCart, changeCartQuantity} = useShopContext()

   //* Setting Local State 
  const [total, setTotal] = useState()
  
  useEffect(() => {                
    setTotal(cart.reduce((acc, curr)=> acc += Number(curr.price) * curr.qty, 0) )
  }, [cart])

  return (
    <div className='home'>

      <div className='productContainer'>
        <ListGroup>
          {
            cart.map( prod =>(
                <ListGroup.Item>
                  <Row>

                    <Col md={2}>
                      <Image src={prod.image} alt={prod.name} fluid rounded />
                    </Col>
                    <Col md={2}>
                          <span>{prod.name}</span>
                    </Col>
                    <Col md={2}>
                          <span>{prod.price}</span>
                    </Col>
                    <Col md={2}>
                          <Rating rating = {prod.ratings}/>
                    </Col>
                    <Col md={2}>
                          <Form.Control
                            as="select"
                            value={prod.qty}
                            onChange={ e => changeCartQuantity(prod.id, e.target.value)}

// console.log(cart[0].inStock) //--> The number of items stocked for that product (5 for example)
 // console.log([...Array(cart[0].inStock)]) //--> An array of undefineds with length equal to (5) the number of items stocked
 // console.log([...Array(cart[0].inStock).keys()]) //--> [0, 1, 2, 3, 4]
                          > 
                            {[...Array(prod.inStock).keys()].map((x) => (
                              <option key={x + 1}>{x + 1}</option>
                            ))}
                          </Form.Control>
                    </Col>
                    <Col md={2}>
                          <Button
                            type="button"
                            variant="light"   
                            onClick={()=> removeFromCart(prod.id)}
                          >
                            <AiFillDelete fontSize="20px" />
                          </Button>
                    </Col>

                  </Row>
                </ListGroup.Item> 
            ))
          }
        </ListGroup>
      </div>

      <div className="filters summary">
        <span className="title">Subtotal {cart.length} items </span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total: € {total}</span>
          <Button type="button" disabled={cart.length === 0}>
              Proceed to Checkout
          </Button>
      </div>

    </div>
  )
}

export default Cart