import React,{useState} from "react";
import axios from "axios";
const Login = ()=>{

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setusername]=useState("")
    const [message,setMessage]=useState("")

    const handleSubmit = async(e)=> 
    {
    try{
        // Prevent 
        e.preventDefault()


        console.log(email,password)



        const response = await axios("http://localhost:5000/register",{
        method:"post",      
        headers:{
                'Content-Type':"application/json"
            },
            data:{
                username:username,
                email:email,
                password:password
            }
        })
        console.log("The Response:",response)
        setMessage(response.data.message)
    // reset The Form 
        setusername("");
        setEmail("");
        setPassword("");
    }
    
    catch(e){
        // Error Handling
        console.log("Error Occured While form Submitting:",e)
    }

    }
    return(
        <div className="  h-screen flex   justify-center items-center ">
    <form className=" shadow-lg   flex   p-3  flex-col align-items-center" onSubmit={handleSubmit} >
        <legend >{message}</legend>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div></div>
            <input type="text" className="border border-solid border-slate-300" placeholder="username" required name="username"
            value={username}
            onChange={e=>setusername(e.target.value)}></input>
        </div>
        <div>
            
        <input type="email" className="border border-solid border-slate-300"placeholder="email" required name="email" value={email}
            onChange={e=>setEmail(e.target.value)}></input>
            
        </div>
        <div>
        <input type="password" className="border border-solid border-slate-300" placeholder="password" required name="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}></input>
        </div>
        <div>
            <button type="submit" className="brand text-white" >Login</button>
        </div>
    </form>
    </div>
    )
}
export default Login;