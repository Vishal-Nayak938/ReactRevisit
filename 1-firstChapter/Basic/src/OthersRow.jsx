import styles from './other.module.css'

let Other = ({Name,Date,onDelete}) =>
{




    return <>

     <div className={styles.Other} key={Name }>
    <div>{Name}</div>
<div>{Date}</div>
<button className={styles.button}
onClick={()=>onDelete(Name)}
>Delete</button>    

</div>


 </>
}
export default Other;