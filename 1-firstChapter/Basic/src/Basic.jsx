import React, { useState } from "react";
import C1 from './c1.jsx'
import Head from "./head.jsx";
import Row1 from './Row1.jsx'
import Other from "./OthersRow.jsx";
import styles from './Basic.module.css'
import UniqueCom from './uniqueCom.jsx'
let Basic = () =>
{
let arr=[{
todoName:"Buy Milk",
todoDate:"12/09/2024"
},
{
    todoName:"Study Time",
    todoDate:"16/12/2024"
},
    {
        todoName:"College Off",
        todoDate:"02/10/2024"
        },
    ];
    
let [currentValue,setCurrentValue]=useState(arr);

const addButtonClicke = (name1,date)=>
{

let newObject=[...currentValue,{ todoName:name1,
    todoDate:date}]
    setCurrentValue(newObject)
}



    function onDeleteClick(name)
    {
        let nemCurrentValue=currentValue.filter(item=>item.todoName !== name)
        setCurrentValue(nemCurrentValue)
    } 


return <React.Fragment>

    {/* <div className={styles.Basic}> */}
    <div>
<Head></Head>
<Row1 name={addButtonClicke}></Row1>
<UniqueCom newCurrent={currentValue} onDelete={onDeleteClick}></UniqueCom>
{/* <Other arr2={currentValue} ></Other> */}


{/* <C1 arr2={arr} ></C1> */}
</div>
</React.Fragment>
}

export default Basic;