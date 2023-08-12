import React, {useState, useEffect} from "react";
import Input from "./input";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const Signup = () => {
    const [Data, setData] = useState("");

    function User(data){
        setData(data);
    }

    useEffect(() => {
        fetch("http://localhost:9000/signup",{
            method:"POST",
            crossDomain: true,
            headers: {
                "Content-Type" : "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({Data}),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.status === "Ok"){
                alert("You have Successfully Signed Up");
                window.location.href = "/";
            } else if(data.status === "User Already Exist"){
                alert("User already exist");
                window.location.href = "/signin";
            }
        })
    }, [Data]);


    return<div class="container">
            <div class="row">
                <div class="col col1">
                    <img class="rabbitpic" src="rab.jpg" alt="rabbit boy"/>
                    <img className="rabbitpic2" src="peter_2r.png" alt="rabbit boy"/>
                </div>
                <div class="col">
                    <h1>Quiz Signup Page</h1>
                        <Input page="Sign Up" click="Click Again" handleUser={User} condition={true}/>
                        <p>Are you already a member ? <Link to="/app">Sign In</Link> </p>
                        <p className="homeBtn"><Link to="/"><HomeIcon fontSize="large" /></Link></p>
                </div>
            </div>
        </div>
}

export default Signup;