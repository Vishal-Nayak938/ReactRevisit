import Container from "./container"
import Info from "./info"
import Cupon from './uniqueCupon.jsx'
import Avatar from "./Avatar"
import PropsByParent from "./props.jsx"

function App() {
let arr=[1,2,3,4,5,6,7,8]
  return <>

{/* <Container>
<h1>Welcome to Passing Children Concept_container</h1>
</Container>

     <Container>
     <p>this is the concept of passing children in
     which we pass the tags using container tag.</p>
     <button onClick={()=>console.log("my name is vishal!")}>Click</button>
</Container> */}

{/* <Avatar></Avatar> */}

<Cupon></Cupon>
<PropsByParent arr2={arr}></PropsByParent>   
    </>
  
}

export default App
