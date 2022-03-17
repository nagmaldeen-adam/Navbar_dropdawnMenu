import React from 'react';
import '../cssFiles/button.css';
import  {Link} from 'react-router-dom' ;
const Button = () =>{
    return(
        <Link to='/sing'>
         <button className="btn">sign up</button>
        </Link>
    )
}
export default Button;