import React from "react";

export default function Button ({text}) {
    return(
    <div>
        <button className="p-2 m-[10px] bg-blue-800 hover:bg-sky-700 rounded-lg">
        <h1 className="text-slate-100 ">{text}</h1>
        </button>
    </div>
    )
}
