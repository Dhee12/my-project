import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Signin from "./signin";
import useToken from '../useToken';

function General() {
    const { token, setToken } = useToken(); //Token to verify If a user is Login.
    const[nav, setNav] = useState(true);
    const [Num, setNum] = useState({
        _id : 1
    });
    const [count, setCount] = useState(2);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [quest, setQuest] = useState({
        question: "What is the antonym of Cold ?",
        option1: "Cool",
        option2: "Hot",
        option3: "Freeze",
        option4: "Warm"
    });
    const [color, setColor] = useState({
        option1: "",

        option2: "",
        option3: "",
        option4: ""
    });
    const [ranNum, setranNum] = useState(2);
    const [score, setScore] = useState(0);


    function handleQuest() {
        setranNum(Math.floor(Math.random() * 4) + 1);
        setCount(()=> count + 1);
        if(count < 11){
            setNum({
                _id: count
            });   
        }
        setColor({
            option1: "buttonDefaultColor",
            option2: "buttonDefaultColor",
            option3: "buttonDefaultColor",
            option4: "buttonDefaultColor"
        });
        setButtonDisabled(false);
    }

    function colorBtn1() {
        if(ranNum === 1){
            setColor({
                option1: "buttonCorrect"
            });
            setScore(score + 10);
        }else{
            setColor({
                option1: "buttonWrong"
            });
        }
        setButtonDisabled(true);
        
    }
    function colorBtn2() {
        if(ranNum === 2){
            setColor({
                option2: "buttonCorrect"
            });
            setScore(score + 10);
        }else{
            setColor({
                option2: "buttonWrong"
            });
        }
        setButtonDisabled(true);
    }
    function colorBtn3() {
        if(ranNum === 3) {
            setColor({
                option3: "buttonCorrect"
            });
            setScore(score + 10);
        }else {
            setColor({
                option3: "buttonWrong"
            });
        }
        setButtonDisabled(true);
    }
    function colorBtn4() {
        if(ranNum === 4){
            setColor({
                option4: "buttonCorrect"
            });
            setScore(score + 10);
        }else {
            setColor({
                option4: "buttonWrong"
            });
        }
        setButtonDisabled(true);
    }

    useEffect(() => {
        fetch("http://localhost:9000/general",{
            method:"POST",
            crossDomain: true,
            headers: {
                "Content-Type" : "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({Num, score}),
        }).then((res)=>res.json())
        .then((data)=>{
            if(ranNum === 1){
                setQuest({
                    question: data.question,
                    option1: data.option3,
                    option2: data.option2,
                    option3: data.option1,
                    option4: data.option4
                 })
            }
            else if(ranNum === 2){
                setQuest({
                    question: data.question,
                    option1: data.option4,
                    option2: data.option3,
                    option3: data.option2,
                    option4: data.option1
                 })

            }
            else if(ranNum === 3){
                setQuest({
                    question: data.question,
                    option1: data.option2,
                    option2: data.option4,
                    option3: data.option3,
                    option4: data.option1
                 })
            }
            else if(ranNum === 4){
                setQuest({
                    question: data.question,
                    option1: data.option4,
                    option2: data.option1,
                    option3: data.option2,
                    option4: data.option3
                 })
            }
        })
    }, [Num, ranNum, score]);

    if(!token){
        return <Signin setToken={setToken} />
    }

    if(count > 10){
        setCount(0);
        window.location.href = "./riddle";
    }
    
    return <div>
        <Header boolean={token} />
            <div onClick={()=> setNav(!nav)} className="mobile_btn">
                {nav ? <MenuIcon fontSize="large"/> : <CloseIcon fontSize="large"/>}
           </div>
            <div className= "Question">
                <h1>{quest.question}</h1>
            </div>
            <div className="row justify-content-around Engbutton">
                <div className="col-4 Engbutton1">
                    <button disabled={isButtonDisabled} onClick={colorBtn1} className={color.option1}>{quest.option1}</button>
                </div>
                <div className="col-4 Engbutton1">
                    <button disabled={isButtonDisabled} onClick={colorBtn2} className={color.option2}>{quest.option2}</button>
                </div>
            </div>
            <div className="row justify-content-around EngBtn">
                <div className="col-4 EngBtn1">
                    <button disabled={isButtonDisabled} onClick={colorBtn3} className={color.option3}>{quest.option3}</button>
                </div>
                <div className="col-4 EngBtn1">
                    <button disabled={isButtonDisabled} onClick={colorBtn4} className={color.option4}>{quest.option4}</button>
                </div>
            </div>
            <div className="time">
                <DoubleArrowIcon fontSize="large" onClick={handleQuest}></DoubleArrowIcon>
            </div>
        <Footer classColor3 = "ftBtn1" condition={nav}/>
    </div>
                
}

export default General;