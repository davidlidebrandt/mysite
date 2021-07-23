import React from 'react'
import fitness from "../images/project-images/fitness.png"
import movie from "../images/project-images/movie.png"
import game from "../images/project-images/game.png"


export default function Projects() {
    return (
        <div className="grid grid-cols-3 font-bold text-center">
            <div className="col-span-3  py-8 px-16 m-auto mt-20 bg-white rounded shadow-2xl">
                <h2 className="type-writer-text">Some of my projects</h2>
            </div>
            <div className="w-2/3 bg-white my-36 m-auto transform -rotate-3 rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
                <h4 className="text-2xl py-4 bg-yellow-100 font-extrabold">Fitness Equipment</h4>
                <img className="w-full rounded m-auto p-5" src={fitness} alt="Project screenshot"></img>
            </div>
            <div className="w-2/3 bg-white my-36 m-auto rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
                <h4 className="text-2xl py-4 bg-green-100 font-extrabold">Movie Ratings And Reviews</h4>
                <img className="w-full rounded m-auto p-5" src={movie} alt="Project screenshot"></img>
            </div>
            <div className="w-2/3 bg-white my-36 m-auto transform rotate-3 rounded min-height-500 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
                <h4 className="text-2xl py-4 bg-green-200 font-extrabold">Find The Pairs</h4>
                <img className="w-full rounded m-auto p-5" src={game} alt="Project screenshot"></img>
            </div>
        </div>
    )
}
