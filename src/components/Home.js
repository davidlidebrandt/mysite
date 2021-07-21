import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="grid grid-cols-3 text-center text-xl font-bold">
            <div className="col-span-3  py-8 px-16 m-auto mt-20 bg-white rounded">
                <h2 className="type-writer-text">Welcome to my site</h2>
            </div>
           <div className="w-2/3 bg-white my-36 m-auto transform -rotate-3 py-4 rounded min-height-500">
               <h4 className="text-2xl">About Me</h4>
               <Link to="/aboutme" className="inline-block border-4 border-yellow-200 bg-yellow-200 rounded-lg py-4 px-8 font-semibold hover:bg-white hover:border-yellow-200 hover:text-yellow-200">Read More</Link>
            </div> 
           <div className="w-2/3 bg-white my-36 m-auto py-4 rounded min-height-500">
                <h4 className="text-2xl">Tech Stack</h4>
                <Link to="/techstack" className="inline-block border-4 border-green-100 bg-green-100 rounded-lg py-4 px-8 font-semibold hover:bg-white hover:border-green-100 hover:text-green-100">Read More</Link>
            </div> 
           <div className="w-2/3 bg-white my-36 m-auto transform rotate-3 py-4 rounded min-height-500">
                <h4 className="text-2xl">Projects</h4>
                <Link to="/projects" className="inline-block border-4 border-green-200 bg-green-200 rounded-lg py-4 px-8 font-semibold hover:bg-white hover:border-green-200 hover:text-green-200">Read More</Link>
            </div> 
        </div>
    )
}
