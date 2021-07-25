import React from 'react'
import fitness from "../images/project-images/fitness.png"
import movie from "../images/project-images/movie.png"
import game from "../images/project-images/game.png"


export default function Projects() {
    return (
      <div className="grid grid-cols-3 font-bold text-center">
        <div className="col-span-3  py-2 px-2 m-auto mt-20 bg-white rounded shadow-2xl green-gradient">
        <div className="bg-white py-8 px-20">
        <h2 className="type-writer-text-19">Some of my projects</h2>
        </div>
        </div>
        <div className="w-3/4 bg-white my-36 text-lg m-auto transform -rotate-3 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
          <h4 className="text-2xl py-4 bg-darker-green font-extrabold shadow-inner">
            Fitness Equipment
          </h4>
          <img
            className="w-full rounded m-auto p-5"
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
            className="block underline text-darker-green py-4 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://fitness-equipment.herokuapp.com/"
          >
            Link to live site
          </a>
          <a
            className="block underline text-darker-green py-4 pb-8 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://github.com/davidlidebrandt/milestone-project-4"
          >
            Github repo
          </a>
        </div>
        <div className="w-3/4 bg-white my-36 m-auto text-lg rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
          <h4 className="text-2xl py-4 bg-medium-green font-extrabold shadow-inner">
            Movie Ratings And Reviews
          </h4>
          <img
            className="w-full rounded m-auto p-5"
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
            className="block underline text-darker-green py-4 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://movie-r-and-r.herokuapp.com/"
          >
            Link to live site
          </a>
          <a
            className="block underline text-darker-green py-4 pb-8 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://github.com/davidlidebrandt/milestone-project-3"
          >
            Github repo
          </a>
        </div>
        <div className="w-3/4 bg-white my-36 m-auto transform rotate-3 text-lg rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
          <h4 className="text-2xl py-4 bg-light-green font-extrabold shadow-inner">
            Find The Pairs
          </h4>
          <img
            className="w-full rounded m-auto p-5"
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
            className="block underline text-darker-green py-4 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://github.com/davidlidebrandt/milestone-project-2"
          >
            Link to live site
          </a>
          <a
            className="block underline text-darker-green py-4 pb-8 px-4 transform hover:scale-110 transition-all duration-700"
            href="https://github.com/davidlidebrandt/milestone-project-2"
          >
            Github repo
          </a>
        </div>
      </div>
    );
}
