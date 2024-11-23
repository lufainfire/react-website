import React from "react";
import Button from "./Button";
import NavButton from "../NavbarButton";

export default function Navbar (){
    return(
        <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 size-full flex flex-row flex-wrap space-x-[450px] fixed top-0 left-0">
            <div className="bg-logo3 bg-cover ml-[30px]   p-0 w-[300px] h-[90px]"/>
            <div className="my-5 flex flex-row place-self-auto space-x-6 ">
            <div className=" flex flex-row ">
            <NavButton text="Menu" link=""/>
            <NavButton text="Club" link="Events"/>
            <NavButton text="Équipe" link=""/>
            <NavButton text="Contact" link="Contact"/>
            </div>
            </div>
        </div>
        
    )
}