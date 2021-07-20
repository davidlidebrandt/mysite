import React from 'react'

export default function Home() {
    return (
        <div className="grid grid-cols-3 text-center text-xl font-bold">
           <div className="h-96 w-1/2 bg-white my-36 m-auto transform -rotate-3 py-4">
               <h4 className="text-2xl">About Me</h4>
               <button className="border-4 bg-yellow-200 rounded-lg py-4 px-8 font-semibold hover:bg-white hover:border-yellow-200">Read More</button>
            </div> 
           <div className="h-96 w-1/2 bg-white my-36 m-auto py-4">
                <h4 className="text-2xl">Tech Stack</h4>
                <button className="border bg-green-100 rounded-lg py-4 px-8 font-semibold">Read More</button>
            </div> 
           <div className="h-96 w-1/2 bg-white my-36 m-auto transform rotate-3 py-4">
                <h4 className="text-2xl">Projects</h4>
                <button className="border bg-green-200 rounded-lg py-4 px-8 font-semibold">Read More</button>
            </div> 
        </div>
    )
}
