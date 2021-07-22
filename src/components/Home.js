import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="grid grid-cols-3 text-center text-xl font-bold">
            <div className="col-span-3  py-8 px-16 m-auto mt-20 bg-white rounded shadow-2xl">
                <h2 className="type-writer-text">Welcome to my site</h2>
            </div>
           <div className="w-2/3 bg-white my-36 m-auto transform -rotate-3 py-4 rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
               <h4 className="text-2xl">About Me</h4>
               <Link to="/aboutme" className="inline-block border-4 border-yellow-200 bg-yellow-200 rounded-lg py-4 px-8 font-semibold hover:bg-white hover:border-yellow-200 hover:text-yellow-200 shadow-xl">Read More</Link>
            </div> 
           <div className="w-2/3 bg-white my-36 m-auto py-4 rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
                <h4 className="text-2xl">Tech Stack</h4>
                <Link to="/techstack" className="inline-block border-4 border-green-100 bg-green-100 rounded-lg py-4 px-8 font-semibold hover:bg-white hover:border-green-100 hover:text-green-100 shadow-xl">Read More</Link>
            </div> 
           <div className="w-2/3 bg-white my-36 m-auto transform rotate-3 py-4 rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
                <h4 className="text-2xl">Projects</h4>
                <Link to="/projects" className="inline-block border-4 border-green-200 bg-green-200 rounded-lg py-4 px-8 font-semibold hover:bg-white hover:border-green-200 hover:text-green-200 shadow-xl">Read More</Link>
            </div> 
            <div className="col-start-2 mb-36 bg-white min-height-700 rounded py-4 bg-yellow-100 opacity-95" style={{clipPath: "polygon(0 0, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"}}>
                <h4 className="text-2xl font-bold mb-3">Want to get in touch?</h4>
                <p className="text-lg font-semibold mb-5">Send me a message below</p>
                <form>
                    <div className="my-3 mx-4">
                        <label className="text-lg font-semibold text-left block">Enter your email</label>
                        <input className="block m-auto w-full rounded shadow-xl" type="email" required></input>
                    </div>
                    <div className="my-3 mx-4">
                        <label className="text-lg font-semibold text-left block">Write your message</label>
                        <textarea className="rounded block m-auto w-full h-48 resize-none shadow-2xl"></textarea>
                    </div>
                    <button className="inline-block my-4 border-4 border-green-200 bg-green-200 rounded-lg py-3 px-6 font-semibold hover:bg-white hover:border-green-200 hover:text-green-200 shadow-xl">Send</button>
             
                </form>
            </div>
        </div>
    )
}
