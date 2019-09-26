import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ title, user }) => {    
    return ( 
        <header className="site-header" id="masthead">
            <Navbar bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">{title}</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                    </Nav>
                    <Nav className="rightNav">
                        {!user && <>
                            <li className="nav-item">
                                <NavLink to="/login" className="btn btn-warning">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="btn btn-warning">Sign Up</NavLink>
                            </li>
                        </>}
                        {user && 
                        <>
                            <li className="nav-item">
                                <NavLink to="/profile" className="nav-link">{JSON.parse(user).email}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/logout" className="btn btn-danger">Logout</NavLink>
                            </li>
                        </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
 
export default Header;