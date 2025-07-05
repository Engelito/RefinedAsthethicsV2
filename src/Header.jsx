
import logoImage from './assets/RALogo.png'
import { NavLink } from 'react-router-dom'; 
import './index.css'

function NavBar(){
    return(
    <nav className="navBar">
        <NavLink to='/' className="nav-logo">
        <img src={logoImage} alt="Your Company Logo" className="logo" />
        </NavLink>
         <ul className="navLinks">
                <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
                <li><NavLink to="/Services" className='nav-link'>Services</NavLink></li>
                <li><NavLink to="/Contact" className='nav-link'>Contact</NavLink></li>
                <li><NavLink to="/Merch" className='nav-link'>Merch</NavLink></li>
        </ul>
    </nav>
    );
} 
export default NavBar;
