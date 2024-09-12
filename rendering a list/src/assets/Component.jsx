import React,{useState} from "react"
function Component(){
    const [number,setNumber]=useState(0)
    const increament=()=>{
        setNumber(number+1)
    }
    const reset=()=>{
        setNumber("0")
    }
    const decreament=()=>{
        setNumber(number-1)
    }
return(
<div>
<p>{number}</p>
<button onClick={increament}>increament</button>
<button onClick={reset}>reset</button>
<button onClick={decreament}>decreament</button>
</div>

)
}
export default Component