import React from "react";
import {Link} from "react-router-dom";
// import Signin from "./signin";

function Footer(props) {
   
    return  <footer className={props.condition ? "footer1" : ["footer1", "active"].join(' ')}>
                <div className="container-footer">
                    <div className="row align-items-end rowBtn">
                        <div className="col ftBtn">
                            <Link to="/english"><button className={props.classColor1}>ENGLISH</button></Link>
                        </div>
                        <div className="col ftBtn">
                           <Link to="/mathematic"><button className={props.classColor2}>Mathematics</button></Link>
                        </div>
                        <div className="col ftBtn">
                            <Link to="/general"><button className={props.classColor3}>General Knowledge</button></Link>
                        </div>
                        <div className="col ftBtn">
                            <Link to="/riddle"><button className={props.classColor4}>Riddle</button></Link>
                        </div>
                        <div className="col ftBtn">
                            <Link to="/leader"><button className={props.classColor5}>Leader Board</button></Link>
                        </div>
                        <div className="col ftBtn1 ftBtn">
                            <Link to="/instruction"><button className={props.classColor6}>Instruction</button></Link>
                        </div>
                    </div>
                </div>
            </footer>
}

export default Footer;