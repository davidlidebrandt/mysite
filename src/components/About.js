import React from 'react'
import diploma from "../images/project-images/diploma.png"
import { FaBookReader } from "react-icons/fa"
import { GoPerson } from "react-icons/go"
import { FaDumbbell } from "react-icons/fa"

export default function About() {
    return (
        <div className="grid grid-cols-3 text-center text-xl font-bold">
        <div className="col-span-3  py-8 px-16 m-auto mt-20 bg-white rounded shadow-2xl">
            <h2 className="type-writer-text">Get to know me ...</h2>
        </div>
        <div className="w-2/3 bg-white my-36 m-auto transform -rotate-3 py-4 rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
            <div className="inline-block">
                <h4 className="text-2xl">Who Am I? <GoPerson className="inline ml-2"/></h4>
                <hr className="border-t-8 border-yellow-200 mt-2"></hr>
            </div>
           
        </div> 
       <div className="w-2/3 bg-white my-36 m-auto py-4 rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
                <div className="inline-block">
                <h4 className="text-2xl">Education <FaBookReader className="inline ml-2"/></h4>
                <hr className="border-t-8 border-green-100 mt-2"></hr>
            </div>
            <img className="w-full rounded m-auto p-5" src={diploma} alt="Project screenshot"></img>
            
        </div> 
       <div className="w-2/3 bg-white my-36 m-auto transform rotate-3 py-4 rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
            <div className="inline-block">
                <h4 className="text-2xl">When I'm Not Coding <FaDumbbell className="inline ml-2"/> </h4>
                <hr className="border-t-8 border-green-200 mt-2"></hr>
            </div>
        </div> 
    </div>
    )
}
