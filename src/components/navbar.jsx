import React from "react";
import { Link} from "react-router-dom"
import { FiAlignJustify } from "react-icons/fi";


const Navbar = () => {
    return (
        <>
            <nav className="navcolor flex justify-between align-items-center p-3 mx-10" >
                <div className="block sm:hidden">
                    <FiAlignJustify size={30} color="green" />
                </div>
                <div className="hidden sm:block font-medium text-sm">Get The App</div>
                <ul className="hidden sm:flex gap-9">
                    <li className="text-lg"><Link to="/">Investor Relation</Link></li>
                    <li className="text-lg"><Link to="/">Add Restaurant</Link></li>
                    <li className="text-lg"><Link to="/login">Login</Link></li>
                    <li className="text-lg"><Link to="/register">Sign Up</Link></li>
                </ul>
            </nav>
        </>
    )
}


export default Navbar;