import React from 'react';
import { Navbar, Container, FormControl, Nav, Dropdown, Badge } from 'react-bootstrap';
import "../styles.css";
import {FaShoppingCart} from 'react-icons/fa';
import { useCartContext } from '../context/CartContextProvider';

const Header = () => {

  const {state:{cart}} = useCartContext()

  return (
    <Navbar bg='dark' variant="dark" style={{height: 80}} >
      <Container>

        <Navbar.Brand>
          <a href="/">Shopping Cart</a>
        </Navbar.Brand>

        <Navbar.Text className='search'>
          <FormControl style={{width: 500}} placeholder="Search..." className='m-auto'/>
        </Navbar.Text>

        <Nav>

          <Dropdown align="end" >
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
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