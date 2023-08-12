import React,{useState} from "react";
import Footer from "./footer";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Instruction (){
    const[nav, setNav] = useState(true);

    return <div>
                <div onClick={()=> setNav(!nav)} className="mobile_btn">
                    {nav ? <MenuIcon fontSize="large"/> : <CloseIcon fontSize="large"/>}
                </div>
                <div className="InstHead">
                    <h1>Instruction on the Quiz.</h1>
                </div>
                <div className="InstBody">
                    <p className="InstPara">1. You can only answer a question once. Immediately you click an option you can't change your answer.</p>
                    <p className="InstPara">2. Once you have answered a question you can't go back to the question.</p>
                    <p className="InstPara">3. You can check the leaderboard to see the position you are in. Top 10 will be rewarded every week.</p>
                    <p className="InstPara">4. Once you close the tab you are playing the game you will be automatically logged out.</p>
                    <p className="InstPara">5. Take your time to answer each question because there is no going back.</p>
                </div>
        <Footer condition={nav}/>
    </div>

}

export default Instruction;