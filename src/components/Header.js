import React from 'react';
import { Navbar, Container, FormControl, Nav, Dropdown, Badge, Button } from 'react-bootstrap';
import "../styles.css";
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import { useShopContext } from '../context/ShopContextProvider';
import { Link } from 'react-router-dom';

const Header = () => {

  const {cartState:{cart}, removeFromCart, filterBySearch} = useShopContext()

  return (
    <Navbar bg='dark' variant="dark" style={{height: 80}} >
      <Container>

        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Text className='search'>
          <FormControl style={{width: 500}} placeholder="Search..." className='m-auto'
                       onChange={ e => filterBySearch(e.target.value) }
          />
        </Navbar.Text>

        <Nav>

          <Dropdown align="end" >
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370}}>
                {
                  cart.length > 0
                  ?
                    ( <>
                        {cart.map(prod => (
                          <span className='cartitem' key={prod.id}>

                            <img
                              src={prod.image}
                              className="cartItemImg"
                              alt={prod.name}
                            />
                            <div className="cartItemDetail">
                                <span>{prod.name}</span>
                                <span>€ {prod.price.split(".")[0]}</span>
                            </div>
                            <AiFillDelete
                                style={{cursor: "pointer", fontSize: "20px"}}
                                onClick={()=>removeFromCart(prod.id)}
                              />
                            
                          </span>
                        ))}
                    </> )
                 
                  :
                    (<span style={{padding: 10}}>Cart is Empty!</span>)
                }

                <Link to="/cart">
                  <Button style={{width: "95%", margin: "0 10px"}}>
                      Go to Cart
                  </Button>
                </Link>

              </Dropdown.Menu>

     

          </Dropdown>

          <Dropdown.Menu style={{minWidth: 370}}>
             <span style={{padding: 10}}>Cart is Empty</span>
          </Dropdown.Menu>

        </Nav>

      </Container>
    </Navbar>
  )
}

export default Header