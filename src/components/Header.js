import { useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return(
        <Navbar dark className='navbar-header' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <h1>N00balakis's Generator Suite</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
            <Collapse isOpen={navOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <h5 className='header-link'>Home</h5>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;