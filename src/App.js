import React from 'react'
import {Navbar,NavbarBrand,NavItem,NavLink,Nav} from "reactstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
        <div>
        <Navbar  color="warning">
        <NavbarBrand>
        ARTOCART
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
        <NavItem>

          <NavLink>Login</NavLink>
          <NavLink>signup</NavLink>
          
            
        </NavItem>
        </Nav>
        </Navbar>
        </div>
        )
}
