import React, { useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomeIcon from '@mui/icons-material/Home';
import Input from "./input";



const Signin = ({ setToken }) => {
    
    const [Data, setData] = useState("");

    function User(data){
        setData(data);
    }

    useEffect(() => {
        fetch("http://localhost:9000/signin",{
            method:"POST",
            crossDomain: true,
            headers: {
                "Content-Type" : "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({Data}),
        }).then((res)=>{
            if (!res.ok) {
                throw new Error('Error during login'); // Handle error if the response is not ok
              }
              return res.json();
        })
        .then((responseData) => {
            console.log(responseData);
            if(responseData.status === "Ok"){
                setToken(responseData.data);
                alert("Login Successful");
                window.location.href = "./english";
            } else if(responseData.status === "User does not exist"){
                alert("User does not exist.");
                window.location.href = "./signup";
            }
        })
    }, [Data, setToken]);

    return<div className="container">
            <div className="row">
                <div className="col col1">
                    <img className="rabbitpic" src="rab.jpg" alt="rabbit boy"/>
                    <img className="rabbitpic2" src="peter_2r.png" alt="rabbit boy"/>
                </div>
                <div className="col">
                    <h1>Quiz Login App</h1>
                    <Input page="Sign In" click="Click Again" handleUsername={User} condition= {false}/>
                    <p>Your First time ? <Link to="/signup">Sign Up</Link></p>
                    <a href="/leader"><button className="leader"><LeaderboardIcon/> LeaderBoard</button></a>
                    <p className="homeBtn"><Link to="/"><HomeIcon fontSize="large" /></Link></p>
                </div>
            </div>
        </div>
}

Signin.propTypes = {
    setToken: PropTypes.func.isRequired
  };
  

export default Signin;