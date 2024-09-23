
function PlayButton({message,symbol})
{

function Click()
{
    alert(message)
}
    return <button onClick={Click}>{symbol}</button>
}


export default function ChildProps()
{
return <>

<PlayButton message={"We are playing right now!"} symbol={"To Play"}/>


</>
}