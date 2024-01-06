import React,{useState} from "react";
import axios from "axios";
const Login = ()=>{

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [message,setMessage]=useState("")

    const handleSubmit = async(e)=> 
    {
    try{
        // Prevent 
        e.preventDefault()


        console.log(email,password)



        const response = await axios("http://localhost:5000/login",{
        method:"post",      
        headers:{
                'Content-Type':"application/json"
            },
            data:{
                email:email,
                password:password
            }
        })
        console.log("The Response:",response)
        setMessage(response.data.message)
    }
    catch(e){
        // Error Handling
        console.log("Error Occured While form Submitting:",e)
    }

    }
    return(
        <div className="bg-red-500  h-screen flex justify-center items-center ">
    <form className="h-4/5 w-2.2/5 shadow-md bg-slate-900 flex" onSubmit={handleSubmit} >
        <legend >{message}</legend>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <input type="email"placeholder="email" required name="email" value={email}
            onChange={e=>setEmail(e.target.value)}></input>
        </div>
        <div>
            <input type="password"placeholder="password" required name="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}></input>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
    </div>
    )
}
export default Login;