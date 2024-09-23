import styles from './C1.module.css'

function C1({arr2})
{
return <>

{arr2.map(items =>
 <div className={styles.firstComponent}>{items}</div>
 )}



</>

}

export default C1;