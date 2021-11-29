import { Link } from "react-router-dom";

export const Card = ({data})=>{
    return <div className = "card" key = {data.id} style = {{width:"1200px"}}>
        <div className="imgCont" style = {{width:"250px"}}>
            <img src  = {data.poster} style={{width:"100%"}}/>
        </div>
        <div>
            <div className="bookticket"><span>{data.title}</span><button><Link to={`./details/${data.id}`}>Details</Link></button></div>

        </div>
    </div>
}