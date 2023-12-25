import React from "react";
// import Navbar from "./components/navbar";
// import bgimage from "./components/backgroundwall/bgimage";
import '../components/backgroundwall/bgimage.css'


const Home = () => {
    return (
        <>
            <div className="bgimg">
                <div className="min-h-screeni  text-center">
                    <h1>
                        Zomato
                    </h1>
                    <p>
                        Discover the best food & drinks in pune
                    </p>
                    <form className="flex justify-center">
                        <div>
                            <input type="text" placeholder='Search City' name='search' id='search' />
                            <detalist>
                                <option></option>
                            </detalist>
                        </div>
                        <div>
                            <input type="text" placeholder="Search for Restaurant" />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Home