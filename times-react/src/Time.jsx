
const Time = (props) =>{

    const handleChange = (e) => {
        if((props.index==0 || props.index == 2) && e.target.value){
            if(e.target.value >=6 ){
                e.target.value = 5;
            }
            else if(e.target.value < 0){
                e.target.value = 0;
            }
        }
        else if((props.index==1 || props.index == 3) && e.target.value){
            if(e.target.value >=9 ){
                e.target.value = 9;
            }
            else if(e.target.value < 0){
                e.target.value = 0;
            }
        }
        props.handleClock(e.target.value, props.index);
        if (props.nextRef) {
            props.nextRef.current.focus();
        }
    };
    return (
        <div className="number-block">
        {props.index == 2? ":": " "}
            <input type="number" inputMode="numeric" className="time-block"  value={props.time} onChange={handleChange} ref={props.inputRef}/>
         </div>
    )
}
export default Time