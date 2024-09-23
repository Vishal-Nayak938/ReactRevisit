let Row1 =()=>{
let arr=["vishal nayak","anshul nayak","akshay nayak"]

    let a=new Date();
return <>

<center>
    <h3>this is the clock that shows the time in bharat at all time.</h3>
    <h1>this is the current time: {a.getFullYear()}</h1>

{arr.map(name=><h1 style={{'color':'blue'}} >{name}</h1>)}

</center>

</>

}
export default Row1;