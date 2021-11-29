import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PrivateRoute = ({path, children, push})=>{
    const {token} = useContext(AuthContext)
    if(token == ""){
        return <Redirect path = {path} to= "/login" push = {true}/>
    }
    return <Route path = {path}>
        {children}
    </Route>
}