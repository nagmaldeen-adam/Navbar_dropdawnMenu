import React  ,{useState} from 'react';
import '../cssFiles/dropdawn.css';
import {Link} from 'react-router-dom';
import {menuElement} from './menuitms.js';
const Drop =() =>{
    const [click ,setClick] = useState(false);
    const handleClick =( ) => setClick(!click);
    return(
        <>
        <ul onClick={handleClick} className={click ? 'drop-menu clicked' : 'drop-menu'}>
            {menuElement.map((item , index) => {
                return(
                  <li key={index}>
                      <Link className={item.cName} to={item.path} onClick={ () => setClick(false)} >
                        {item.title}
                      </Link>
                  </li>
                )
            })}

        </ul>
        </>
    )
}
export default Drop;