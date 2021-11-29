import {Link} from "react-router-dom";

export const Navbar = ()=>{
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/dashboard" >Dashboard</Link>
            <Link to="/about" >About US</Link>
            <Link to="/newshows" >Newshows</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}