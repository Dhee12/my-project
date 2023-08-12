import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
    
    return  <nav className="navbar navbar-light headContainer">
                <div className="container-fluid">
                <Link to= "/"><img className="logo2" src="Logo2.png" alt="Logo for Peter Rabbit"/></Link>
                    {
                        props.boolean ?  
                        <div className="d-flex">
                        <Link to="/logout"><button  className="but" >Sign Out</button></Link>
                        <Link to="/instruction"><button  className="but1" >Instruction</button></Link>
                        </div>
                         : <div className="d-flex">
                        <Link to="/app"><button className= "but" >Sign In</button></Link>
                        <Link to="/signup"><button className="but">Sign Up</button></Link>
                        </div>
                    }
                </div>
            </nav>
}

export default Header;