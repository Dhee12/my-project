import React from "react";
import useToken from '../useToken';
import Signin from "./signin";


const App = () => {
    const { token, setToken } = useToken(); //Token to verify If a user is Login.
    if(!token){
        return <Signin setToken={setToken} />
    }
}

export default App;