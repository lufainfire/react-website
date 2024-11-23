import React from "react"
import {Link} from "react-router-dom"
export default function NavButton ({text, link}) {
    return(
    <div>
        <Link to={`/${link}`}>
        <button className="p-2 m-[10px] bg-trasparent rounded-lg">
        <h1 className="text-white text-2xl font-semibold text-center text-gradient-to-r from-pink-500 to-violet-500">{text}</h1>
        </button> 
        </Link>
    </div>
    )
}