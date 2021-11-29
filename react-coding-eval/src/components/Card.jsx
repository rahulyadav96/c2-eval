export const Card = ({data})=>{
    return <div className = "card" key = {data.id}>
        <div className="imgCont">
            <img src  = {data.poster} />
        </div>
        <div>
            <div className="bookticket"><span>{data.title}</span><button>Details</button></div>

        </div>
    </div>
}