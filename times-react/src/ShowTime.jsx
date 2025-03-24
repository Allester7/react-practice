const ShowTime = ({min, sec})=>{
    const minArray = min < 10 ? ("0"+ min).split(""):min.toString().split("");
    const secArray = sec < 10 ? ("0"+ sec).split(""):sec.toString().split("");
    console.log(minArray,secArray)
    
    return (
        <div className="show-time">
            {minArray.map((min,index) => 
                {return  <p key={index}>{min}</p>
                })}
                <p>:</p>
            {secArray.map((sec,index) => 
                {return <p key={index}>{sec}</p>
                })}
        </div>
    )
}

export default ShowTime