import Container from './container.jsx'

let Info =()=>{

return <>
<Container>
<h1>Welcome to Passing Children Concept_container</h1>
</Container>

     <Container>
     <p>this is the concept of passing children in
     which we pass the tags using container tag.</p>
     <button onClick={console.log("my name is vishal!")}>Click</button>
</Container>

<Container>
    <div>hello to all my children </div>
</Container>

</>

}

export default Info;