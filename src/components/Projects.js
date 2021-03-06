import React from 'react'
import { useEffect } from 'react'
import fitness from "../images/project-images/fitness.png"
import movie from "../images/project-images/movie.png"
import game from "../images/project-images/game.png"



export default function Projects() {
    useEffect(()=> {
        window.scrollTo(0,0)
      })
    return (
      <div className="grid grid-cols-12 font-bold text-center">
        <div className="col-span-12  py-2 px-2 m-auto mt-20 bg-white rounded shadow-2xl green-gradient">
        <div className="bg-white py-3 px-6 xl:py-8 xl:px-16 rounded">
        <h2 className="type-writer-text-19">Some of my projects</h2>
        </div>
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2  xl:col-span-4 w-full  xl:w-11/12 bg-white mt-20 text-lg m-auto transform md:-rotate-3 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
          <h4 className="text-2xl py-4 bg-darker-green font-extrabold shadow-inner opacity-90">
            Fitness Equipment
          </h4>
          <img
            className="w-3/4 rounded m-auto p-5"
            src={fitness}
            alt="Project screenshot"
          ></img>
          <p className="py-4 px-4">
            <span className="font-extrabold">Fitness Equipment –</span> A site
            for a fictional company that sells fitness equipment.
          </p>
          <h5 className="font-extrabold text-xl px-4">Main Technologies:</h5>
          <p className="pb-4 px-4">
            Django, Python, HTML, CSS, JavaScript, PostgreSQL, 
            Stripe, JQuery,
            Bootstrap.
          </p>
          <a
            className="block underline text-darkest-green py-4 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://fitness-equipment.herokuapp.com/"
          >
            Link to live site
          </a>
          <a
            className="block underline text-darkest-green py-4 pb-8 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://github.com/davidlidebrandt/milestone-project-4"
          >
            Github repo
          </a>
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2  xl:col-span-4 w-full xl:w-11/12 bg-white mt-20 xl:mb-20 m-auto text-lg rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
          <h4 className="text-2xl py-4 bg-medium-green font-extrabold shadow-inner opacity-90">
            Movie Ratings And Reviews
          </h4>
          <img
            className="w-3/4 rounded m-auto p-5"
            src={movie}
            alt="Project screenshot"
          ></img>
          <p className="py-4 px-4">
            <span className="font-extrabold">Movie R&R –</span> A site for
            reading and adding reviews and ratings for movies.
          </p>
          <h5 className="font-extrabold text-xl px-4">Main Technologies:</h5>
          <p className="pb-4 px-4">
            Python, Flask, HTML, CSS, JavaScript, MongoDB, JQuery, Bootstrap.
          </p>
          <a
            className="block underline text-darkest-green py-4 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://movie-r-and-r.herokuapp.com/"
          >
            Link to live site
          </a>
          <a
            className="block underline text-darkest-green py-4 pb-8 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://github.com/davidlidebrandt/milestone-project-3"
          >
            Github repo
          </a>
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2  xl:col-span-4 w-full xl:w-11/12 bg-white my-20 m-auto transform md:rotate-3 text-lg rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
          <h4 className="text-2xl py-4 bg-light-green font-extrabold shadow-inner opacity-90">
            Find The Pairs
          </h4>
          <img
            className="w-3/4 rounded m-auto p-5"
            src={game}
            alt="Project screenshot"
          ></img>
          <p className="py-4 px-4">
            <span className="font-extrabold">Find The Pairs –</span> A game
            where you are tasked to find matching pairs of cards.
          </p>
          <h5 className="font-extrabold text-xl px-4">Main Technologies:</h5>
          <p className="pb-4 px-4">
            HTML, CSS, JavaScript, JQuery, Bootstrap, Firebase Cloud Firestore.
          </p>
          <a
            className="block underline text-darkest-green py-4 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://github.com/davidlidebrandt/milestone-project-2"
          >
            Link to live site
          </a>
          <a
            className="block underline text-darkest-green py-4 pb-8 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://github.com/davidlidebrandt/milestone-project-2"
          >
            Github repo
          </a>
        </div>
      </div>
    );
}
