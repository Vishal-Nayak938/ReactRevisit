import { useState } from "react"
import Other from "./OthersRow"

function UniqueCom({newCurrent,onDelete})
{

    
    return <>

{newCurrent.map(itme=><Other Name={itme.todoName} key={itme.todoName}  Date={itme.todoDate}  onDelete={onDelete}></Other> )}

    
    </>

}
export default UniqueCom