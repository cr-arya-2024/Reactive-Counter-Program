function Button(){
    
   function  handelClick(art){
  art.target.style.backgroundColor="red"
    }
   
return(
    <button  onClick={(name)=>handelClick(name)}>click me</button>
)
}
export default Button