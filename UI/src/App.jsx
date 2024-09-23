import { useState } from "react";
import Button from "./Components/button";
import ChildProps from "./Components/chileprops";
import Toolbar from "./Components/Toolbar";
import PageColor from "./Components/PageColor";
function App()
{
  
// let [currentState,toUpdateMethod]=useState("insert item is here...")
// console.log(`current value : ${currentState}`)

let [foodItems,setFoodItems]=useState(["Salad ","green vegetables ","potato"])



function onChang(event){
if(event.key==="Click")
{
  let newItem=event.target.value;
  event.target.value=" "
  let newArrItems=[...foodItems,newItem]

}
}

return <>

<input type="text" placeholder="Enter Text Here..." onChange={onChang}/>
<br />
{foodItems.map(item=><li>{item}</li>)}
<br /><br />
<input type="button"  value="Click" onClick={onChang} />
{/* <Button></Button> */}
{/* <ChildProps />
<Toolbar /> */}
<PageColor />

</>

}
export default App






// let textToShow="insert item is here..."
// let textStateArr=useState("insert item is here...");
// let currentState=textStateArr[0];
/* let toUpdateMethod=textStateArr[1]*/