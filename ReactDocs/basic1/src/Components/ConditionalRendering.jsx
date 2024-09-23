import Even from "./Even";
import Odd from "./odd";

const OddEven=()=>
{

let number=[2,6,5,3,1,9,8,10];
let v;
{number.map(item=>{
console.log(item)

    if(item%2==0)
        {
            number=<Even/>;
        }
        else{
            number=<Odd/>
        }
        

})}


return <>
{number}
</>
}

export default OddEven