import { useContext, useState } from "react"
import { Redirect } from "react-router"

import { AuthContext } from "../context/AuthContext"

export const Login = () =>{
    const {token,handleToken} = useContext(AuthContext) 
    const [forData, setFormData] = useState({})
    const handleSubmit = ()=>{
       let newtoken = Date.now()
        handleToken(newtoken);
       
    }
    return (token == "")?<div>
        <form onSubmit = {handleSubmit}>
            <input type = "email" placeholder = "Enter Email"  />
            <br />
            <input type="password" placeholder = "Enter Password" />
            <br />
            <input type = "submit" value = "Submit" />
        </form>
    </div>: <Redirect to="./dashboard"/>
}