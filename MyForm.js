import { useState }from "react";
function MyForm()
{
    const[inputs,setInputs]=useState({});
    const handleChange =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
    alert(inputs.username+" "+inputs.age);
}
   return(
    <form onSubmit={handlesubmit}>
        <label>
            Enter your Name:
            <input
                type="test"
                name="username"
                value={inputs.username||""}
                onChange={handleChange}
                />
        </label>
        <label>
            Enter Your Age:
            <input 
                type="number"
                name="age"
                value={inputs.age||""}
                onChange={handleChange}
                />
        </label>
        <input type="submit"/>
    </form>
   )
}
export default MyForm;
