
function HandleAlert({message,children})
{
return <button onMouseEnter={()=>alert(message)}>
    {children}</button>
}

function Button()
{
const handleClick=(a)=>{

alert(`Yes, ${a}`)
}

return <><button onClick={()=>{console.log("it is mouse down")}}>I don't do anything.</button>
<button onClick={()=>handleClick("we are playing in just minutes!")} >Watch movie</button>
<button onClick={()=>handleClick("We are uploading photo")} >upload photo</button>
{/* inline eventHandler */}
<br/>

<button onClick={()=>alert("hi")} >To show</button>
<br />
<HandleAlert  message={"you are doning well"} children={"done"}   />

<HandleAlert  message={"We are hiring you!"} children={"get hired"}   />

</>
}
export default Button