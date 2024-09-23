
import styles from './pageColor.module.css'

const PageColor=()=>
{

function handleClick()
{
    let newPage=document.body.style;
    if(newPage.backgroundColor==='black')
    {
        newPage.borderStyle==='white'
    }
else{
    newPage.borderStyle==='black'
}

}

return <>

<button onClick={handleClick} className={styles.PageColor}>use</button>

</>


}
export default PageColor