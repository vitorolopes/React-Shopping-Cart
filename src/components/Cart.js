import React from 'react';
import { ListGroup, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { useCartContext } from '../context/CartContextProvider';
import Rating from './Rating';


const Cart = () => {

  const {state:{cart}} = useCartContext()

  const prod = cart[0]
  console.log(prod)

  return (
    <div className='home'>

      <div className='productContainer'>
        <ListGroup>
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
                    > 
                      <option>777</option> 
                      <option>888</option>
                    </Form.Control>
              </Col>
              <Col md={2}>
                    <Button
                      type="button"
                      variant="light"   
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
              </Col>

            </Row>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="filters summary">
        <span className="title">Subtotal {cart.length} items </span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total: € "TOTAL"</span>
          <Button type="button" disabled={cart.length === 0}>
              Proceed to Checkout
          </Button>
      </div>

    </div>
  )
}

export default Cart