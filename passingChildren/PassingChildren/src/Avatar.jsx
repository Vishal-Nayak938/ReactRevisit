import styles from './img.module.css'

let time=new Date();
// let T=time.toLocaleTimeString();
const formateDate = ( date) =>
{

return new Intl.DateTimeFormat
('en-us',{weekday:"long"}).format(date);

}



function Avatar(){
let url="https://i.imgur.com/7vQD0fPs.jpg";
let altName="Gregorio Y. Zara";
let name="Vishal Nayak"
let fatherName='Rajendra'
    return <>
    <img className={styles.Avatar} src={url} alt={altName} />
<div style={{backgroundColor:"black",color:'white', width:'250px', height:'30px',borderRadius:'5px'}}>{name}'s father {fatherName}</div>
<h1>To Do List For {formateDate(time)}</h1>
    </>
}

export default Avatar;