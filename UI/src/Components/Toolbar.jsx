function Button({onClick,children})
{
return  <button onClick={()=> {
    e.stopPropagation();
    onClick();
  }}>
    {children}
  </button>
}

export default function Toolbar()
{

    return <>
    
    <div className="" onClick={(event)=>alert(event)}>
<Button onClick={()=>alert("you have clicked Click button!")} >Click</Button>
<Button onClick={()=>alert("you have clicked Submit button!")} >Submitted</Button> 


<form onSubmit={e=> {e.preventDefault(); alert('submitting')}}>
<input />
<button>Send</button>
</form>

     </div>
    
    </>
}