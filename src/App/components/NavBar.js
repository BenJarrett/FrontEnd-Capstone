import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  // Button,
  NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = () => {
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
