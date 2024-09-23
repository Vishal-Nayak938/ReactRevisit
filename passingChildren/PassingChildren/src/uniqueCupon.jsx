import styles from './img.module.css'

let person={
    name:"vishal Nayak",

    theme: {
backgroundColor:'Black',
color:'pink',
width:'25%',
display:'inline-block',
justifyContent:'center',
textAlign:'center',
borderRadius:'20px'
    },
    
url:"https://i.imgur.com/7vQD0fPs.jpg"

};

function Cupon()
{
    let name="Vishal Nayak"
// let url="https://i.imgur.com/7vQD0fPs.jpg"
let alt='foto'

    return <>
    <div style={person.theme}>

<h1>{name}'s Todos</h1>
<img src={person.url} alt={alt} style={{borderRadius:'40px'}}/>

<ul>
<li>Be Confident!</li>
<li>To meet unknown people</li>
<li>To motivate ourself</li>
</ul>

    </div>
    
    </>
}

export default Cupon