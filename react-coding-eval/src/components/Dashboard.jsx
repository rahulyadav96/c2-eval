import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDataError, getDataLoading, getDataSuccess } from "../Redux/actions";
import axios from "axios";
import { Card } from "./Card";

export const Dashboard= ()=>{
    
   const [data, setData] = useState([])
    //console.log(store.state)
   // const data  = useSelector(store=> store.state.data)
    useEffect(() => {
       fetchData()
       
    }, [])
//console.log(data)
    const fetchData = ()=>{
       // dispatch(getDataLoading())
        axios.get("http://localhost:3001/data")
        .then((res)=>{
            //console.log(res.data)
            // dispatch(getDataSuccess(res.data))
            setData([...data, res.data])
        })
        .catch((err)=>{
            //dispatch(getDataError())
            console.log("err",err)
        })
    }
    return <div>
        <h1>Welcome to Dashboard</h1>
        <section className = "booked"></section>
        <section className = "movies">
            <h1>Movies</h1>
            {
                data.length>0? data[0].movies.map((ele)=><Card data = {ele} />):<div>Loading...</div>
            }
           
        </section>
        <section>
            <h1>Events</h1>
            {
                data.length>0? data[0].movies.map((ele)=><Card data = {ele} />):<div>Loading...</div>
            }
        </section>
        <section>
            <h1>
                plays:
            </h1>
            {
                data.length>0? data[0].movies.map((ele)=><Card data = {ele} />):<div>Loading...</div>
            }
        </section>
    </div>
}