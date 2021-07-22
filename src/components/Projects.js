import React from 'react'
import fitness from "../images/project-images/fitness.png"
import movie from "../images/project-images/movie.png"
import game from "../images/project-images/game.png"


export default function Projects() {
    return (
        <div className="grid grid-cols-3 font-bold text-center">
            <div className="col-span-3  py-8 px-16 m-auto mt-20 bg-white rounded">
                <h2 className="type-writer-text">Some of my projects</h2>
            </div>
            <div className="h-96 w-2/3 bg-white my-36 m-auto transform -rotate-3 rounded min-height-500">
                <h4 className="text-2xl py-4 bg-yellow-100">Fitness Equipment</h4>
                <img className="w-full rounded m-auto p-5" src={fitness} alt="Project screenshot"></img>
            </div>
            <div className="h-96 w-2/3 bg-white my-36 m-auto rounded min-height-500">
                <h4 className="text-2xl py-4 bg-green-100">Movie Ratings And Reviews</h4>
                <img className="w-full rounded m-auto p-5" src={movie} alt="Project screenshot"></img>
            </div>
            <div className="h-96 w-2/3 bg-white my-36 m-auto transform rotate-3  rounded min-height-500">
                <h4 className="text-2xl py-4 bg-green-200">Find The Pairs</h4>
                <img className="w-full rounded m-auto p-5" src={game} alt="Project screenshot"></img>
            </div>
        </div>
    )
}
