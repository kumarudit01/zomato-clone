import React, { useEffect, useState } from "react";
import axios from "axios";
import Service from "../components/service";
// import Navbar from "./components/navbar";
// import bgimage from "./components/backgroundwall/bgimage";
import '../components/backgroundwall/bgimage.css'


const Card = (props)=>
{
return(
        <div className="boxes h-[280px] min-w-[354px] rounded-lg  bg-white hover:scale-105">
          <div className="h-[200px] min-w-[354px] rounded-t-lg border bg-white border-slate-300 transition-all">
            <img
              className="object-cover h-[200px] w-[354px] rounded-t-lg"
              src={props.imgdata}
              alt=""
            />
          </div>
          <div className="h-[80px] bg-white w-[354px] rounded-b-lg border border-slate-300 flex flex-col justify-center px-3">
            <h2 className="text-xl font-bold">{props.rname}</h2>
            <p>{props.desc}</p>
            <p>{props.price}</p>
          </div>
        </div>
      );
    }


const Home = () => {
    const [rname,setRname]=useState("")
    const [result,setResult]=useState([])
    const searchResturant = async (data)=>{
        try{
            if(data===""){
                // show all data
            const res = await axios.get(`http://localhost:5000/resturants`)
            console.log("The Response : ", res)    
            setResult(res.data)
            return
            }
            const res = await axios.get(`http://localhost:5000/resturants/${data}`)
            console.log("The Response:",res)
            setResult(res.data)
        } catch(e){
            console.log("Error While Serching the Doc")
        }
    }
    useEffect(() => {

    }, [result])
  
    return (
        <>
            <div className="bgimg">
                <div className="  text-center">
                    <Navbar/>
                    <div className="flex justify-center align-items-center">
                        <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" height="60px" width="300px"/>
                    </div>
                    <p className="text-4xl my-8">
                        Discover the best food & drinks in Chandigarh
                    </p>
                    <form className="flex justify-center">
                        <div className="px-5 h-[3rem] w-[18rem] gap-2 rounded-l-md bg-white flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
                            <input className="" type="text" placeholder='Search City' name='search' id='search' />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri"><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg>
                            <detalist>
                                <option></option>
                            </detalist>
                        </div>
                        <div className="px-5 h-[3rem] w-[28rem] gap-2 rounded-r-md bg-white flex items-center">
                        <box-icon name='search'></box-icon>
                            <input className=" w-[28rem]"
                            value={rname} type="text" placeholder="Search for Restaurant,Cuisine or a Dish"
                            onChange={e=>{setRname(e.target.value)
                                searchResturant(e.target.value)}}
                             />
                        </div>
                    </form>
                  {/* <ul>
            {result.map(item => {
              return (
                  <li className="p-3 shadow-lg">
                    <img src={item.imgdata} />
                    <div>{item.rname}</div>
                    <div>{item.price}</div>
                  </li>
              )
            })}
          </ul> */}
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-3 container">
        {result.length === 0 ? (
          <Service />
        ) : (
          result.map((item) => {
            return (
              <Card
                rname={item.rname}
                price={item.price}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;

