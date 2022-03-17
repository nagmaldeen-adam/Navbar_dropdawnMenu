import React ,{useState} from 'react';
import '../cssFiles/navbar.css';
import {Link} from 'react-router-dom';
import Button from './button.js';
import Drop from './dropdawn.js';
import { FaBars } from 'react-icons/fa';
import {FaTimes ,FaCaretDown} from 'react-icons/fa';
const Navbar = () =>{
    const [dropdawn ,setDropdawn] = useState(false);
    const [click ,setClick] = useState(false);

    const handleClick =() => setClick(!click);
    const closeMenu = () =>setClick(false);

     const  onMouseEnter = () => {
                if(window.innerWidth < 950) {setDropdawn(false)}
                else{ setDropdawn(true)}};
       const  onMouseLeave = () => {
                if(window.innerWidth < 950) {setDropdawn(false)}
                else{setDropdawn(false)} } ;
    return(
        <> 
        <nav className="navbar" >
            <Link to='/' className="navbar-logo"  >
                awsome
            </Link>
            <div className='menu-icons' onClick={handleClick}>
                <i className='m'>
            {click ?<FaTimes /> : <FaBars />  }
            </i>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMenu}>
                    home
                </Link>
                </li>
                <li className='nav-item' 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <Link to='/services' className='nav-links' onClick={closeMenu}>
                    services <FaCaretDown className='icon'/>
                </Link>
                {dropdawn && <Drop />}
                </li>
                <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMenu}>
                    contact us
                </Link>
                </li>
                <li className='nav-item'>
                <Link to='/sing' className='nav-link-mobile' onClick={closeMenu}>
                    sign up
                </Link>
                </li>
            </ul>

            <Button />
        </nav>
        </>
    )
}
export default Navbar;