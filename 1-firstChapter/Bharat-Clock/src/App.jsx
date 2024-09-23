import Row1 from './Row1.jsx'

function App() {
 
  let series=[1,2,3,4,'r',4,'s']
// let d=series.map(digit);
  return <>
     <Row1></Row1>
{series.map(digit=><h1>{digit}</h1>)}

    </>
  
}

export default App
