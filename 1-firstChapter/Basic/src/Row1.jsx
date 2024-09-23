import { useState,useRef } from 'react';
import styles from './Row1.module.css'

let Row1 =({name}) =>{


// let [inputName,setInputName]=useState("");
// let [inputDate,setInputDate]=useState("");

const todoNameElement=useRef();
const todoDateElement=useRef();

// function InputName(event)
// {
// let newName=event.target.value;
// setInputName(newName);

// }

// function InputDate(event)
// {
// let newDate=event.target.value;
// setInputDate(newDate)

// }

function nameIsHere(event)
{
   let inputName=todoNameElement.current.value;
   let inputDate=todoDateElement.current.value;
   todoDateElement.current.value="";
   todoNameElement.current.value=""
   console.log(`nameIs :${inputName} and date is ${inputDate}`)
   name(inputName,inputDate)
}



return <>
<div className={styles.Row1}>
<input  className={styles.input} type="text" ref={todoNameElement} key={Math.random()}/>
<input  className={styles.date} type="date" ref={todoDateElement} key={Math.random()} />

<button className={styles.button}   

onClick={nameIsHere}

>Add</button>
</div>
</>

}
export default Row1;