import styles from './info.module.css'


let intro={
name:"vishal nayak",
age:21,
city:"saharanpur",
qualification:"bca",
}

const Intro = () =>{
    let name="unknown"
let imageUrl='https://i.imgur.com/yXOvdOSs.jpg';

return <>

<ul className={styles.info}>
<li><img src={imageUrl} alt={name} /></li>
    <li>{intro.name}</li>
    <li>{intro.age}</li>
    <li>{intro.city}</li>
    <li>{intro.qualification}</li>
    </ul>

</>

}
export default Intro