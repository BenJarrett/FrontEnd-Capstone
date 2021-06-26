import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
  <NavItem>
    <Link className="nav-link" id="add-products-id" to="/add-products">Add Product</Link>
  </NavItem>
  <NavItem>
              <Link className="nav-link" to="/staff">Staff</Link>
            </NavItem>
            {/* <Button className='nav-link' color='link' onClick={signOutUser}>Logout</Button> */}
  </>

  );

  const authenticatedUser = () => (
    <>
  <NavItem>
    <Link className="nav-link" id="user-wishlist-id" to="/user-list">Wish List</Link>
  </NavItem>
  <Button style={{
    color: 'white', backgroundColor: 'transparent', border: 'transparent',
  }} onClick={signOutUser}><i className="fas fa-sign-out-alt"></i> Sign Out</Button>
  </>
  );
  return (
            <div className="nav-bar">
      <Navbar className="nav-bar" dark expand="md">
      <NavbarBrand href="/">
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/all-products">Complete Catalog</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/on-sale">On Sale</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/staff-picks">Staff Picks</Link>
            </NavItem>
            {/* <Button className='nav-link' color='link' onClick={signOutUser}>Logout</Button> */}
            {/* <Button className='nav-link' color='link' onClick={signInUser}>Sign In</Button> */}
            {admin && authenticated()}
          {user ? authenticatedUser()
            : <Button style={{
              color: 'white', backgroundColor: 'transparent', border: 'transparent',
            }} onClick={signInUser}><i className="fas fa-sign-in-alt"></i> Sign In</Button>
          }
          <NavItem>
            <NavItem>
                  {/* {
                    user === false || admin === false ? <Button color="link" onClick={signInUser}>Sign In</Button>
                      : ''
                  } */}
                    {/* {
                    user === true ? ''
                      : <Button color="link" onClick={signInUser}>Sign In</Button>
                  } */}
                </NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};

export default NavBar;
