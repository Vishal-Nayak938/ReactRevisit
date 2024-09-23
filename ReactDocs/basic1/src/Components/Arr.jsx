function Arr()
{
    let a=["Apple","Mango","Banana","Papaya"]
    let b=[{name:'Apple', id:"A"
        ,name: "Shirt", id:"B",
        name:"Shocks", id:"C"}];


   return <>
   {a.map(item=><h3>{item}</h3>)}
   <ul>   {b.map(things=><li>{things.name}</li>)}
   </ul>
   </>
   

}

export default Arr

