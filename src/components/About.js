import React from 'react'

export default function About() {
    return (
        <div className="grid grid-cols-3 text-center text-xl font-bold">
        <div className="col-span-3  py-8 px-16 m-auto mt-20 bg-white rounded">
            <h2 className="type-writer-text">Get to know me ...</h2>
        </div>
       <div className="w-2/3 bg-white my-36 m-auto transform -rotate-3 py-4 rounded min-height-500">
           <h4 className="text-2xl">Who Am I?</h4>
           
        </div> 
       <div className="w-2/3 bg-white my-36 m-auto py-4 rounded min-height-500">
            <h4 className="text-2xl">Education</h4>
            
        </div> 
       <div className="w-2/3 bg-white my-36 m-auto transform rotate-3 py-4 rounded min-height-500">
            <h4 className="text-2xl">When I'm Not Coding</h4>
            
        </div> 
    </div>
    )
}
