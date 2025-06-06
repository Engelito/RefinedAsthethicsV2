
import logoImage from './assets/RALogo.png'
import { Link } from "react-router-dom";

function NavBar(){
    return(
    <nav className="navBar">
        <Link to='/Home' className="nav-logo">
        <img src={logoImage} alt="Your Company Logo" className="logo" />
        </Link>
         <ul className="navLinks">
                <li><Link to="/Home" className='nav-link'>Home</Link></li>
                <li><Link to="/Services" className='nav-link'>Services</Link></li>
                <li><Link to="/Contact" className='nav-link'>Contact</Link></li>
                <li><Link to="/Merch" className='nav-link'>Merch</Link></li>
        </ul>
    </nav>
    );
} 
export default NavBar;
