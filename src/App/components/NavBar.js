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
// import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
            <div>
      <Navbar className="nav-bar" light expand="md">
      <NavbarBrand href="/">
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/all-products">All Products</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/on-sale">On Sale</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/staff-picks">Staff Picks</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/add-products">Add Product</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/favorites">Favorites</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/staff">Staff</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/user-list">Current List</Link>
            </NavItem>
            <NavItem>
              {
                user !== null
                && <NavItem>
                  {
                    user
                      ? <Button color='info' onClick={signOutUser}>Sign Out</Button>
                      : <Button color='info' onClick={signInUser}>Sign In</Button>
                  }
                </NavItem >
                }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
