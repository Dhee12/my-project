import React, { useState} from "react";
import Header from "./header";
import Footer from "./footer";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useToken from '../useToken';

function Homepage() {
    const { token } = useToken();
    const[nav, setNav] = useState(true);

    return <div>
                <Header boolean={token}/>
                    <div className="mobile_btn">
                        {nav ? <MenuIcon onClick={()=> setNav(!nav)} fontSize="large"/> : <CloseIcon onClick={()=> setNav(!nav)} fontSize="large"/>}
                    </div>
                <div>
                    <div className="content">
                        <h3>Peter-Rabbit</h3>
                        <h1>QUIZ APP</h1>
                    </div>
                    <div className="bodypage">
                        <img className="HomePic" src="PetAndFrens.png" alt="HomePic"/>
                        <img className="BGimg" src="BG.png" alt="BG"/> 
                    </div>
                    <div className="copyRight">
                        <h3>Created and Designed by @Mautin Dosu</h3>
                    </div>
                </div>
                <Footer condition={nav}/>
        </div>
}

export default Homepage;
