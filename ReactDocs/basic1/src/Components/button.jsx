import styles from './button.module.css'

import { useState } from 'react';

function MyButton()
{
  let [count,setCount]=useState(0);

  function Activity()
  {
    setCount(count+1);
  }

  return <>
  <button className={styles.button} onClick={Activity} >Clicked {count} times</button><br />
 

  </>
}



export default MyButton