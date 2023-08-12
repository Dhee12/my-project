import {useState} from "react";
import React from "react";


function Input(props) {
    const [person, setPerson] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        props.handleUser(person);
        setPerson("");
    }

    function handleUserSubmit(event){
        event.preventDefault();
        props.handleUsername(person);
        setPerson("");
    }


    return  <div className="form-floating mb-3 fillbox">
            <form onSubmit={props.condition ? handleSubmit : handleUserSubmit} action="">
                <input name="userName" 
                type="text" className="form-control" 
                onChange={(e)=> setPerson(e.target.value)}
                id="floatingInput" 
                value = {person} 
                placeholder="Enter your Username"
                />
                <label for="floatingInput">{props.name}</label>
                <button type="submit" className="btn btn-outline-success">{props.page}</button>
            </form>
            </div>
}

export default Input;