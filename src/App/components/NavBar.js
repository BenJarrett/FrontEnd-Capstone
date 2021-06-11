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

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
  <>
   <NavItem>
    <Link className="nav-link" to='/add-project'>Add New Project</Link>
   </NavItem>
  </>
  );
  console.warn(admin);
  return (
            <div>
      <Navbar className="nav-bar" light expand="md">
      <NavbarBrand href="/">
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          { admin && authenticated()}
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
            {
              admin !== null
              && <NavItem>
                {
                  admin
                    ? <Button color='#252323' onClick={signOutUser}>Log Out</Button>
                    : <Button color='#252323' onClick={signInUser}>Sign In</Button>
                }
              </NavItem>
            }
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
