import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="grid grid-cols-3 text-center text-xl font-bold">
      <div className="col-span-3  py-2 px-2 m-auto mt-20 bg-white rounded shadow-2xl green-gradient">
        <div className="bg-white py-8 px-20">
            <h2 className="type-writer-text">Welcome to my site</h2>
        </div>
      </div>
      <div className="w-2/3 bg-white my-36 m-auto transform -rotate-3 py-4 rounded min-height-700 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl font-extrabold">About Me</h4>
        <Link
          to="/aboutme"
          className="inline-block border-4 border-transparent bg-darker-green rounded-lg py-4 px-8 font-bold hover:bg-white hover-darker-green shadow-xl"
        >
          Read More
        </Link>
      </div>
      <div className="w-2/3 bg-white my-36 m-auto py-4 rounded min-height-700 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl font-extrabold">Tech Stack</h4>
        <Link
          to="/techstack"
          className="inline-block border-4 border-transparent bg-medium-green rounded-lg py-4 px-8 font-bold hover:bg-white hover-medium-green shadow-xl"
        >
          Read More
        </Link>
      </div>
      <div className="w-2/3 bg-white my-36 m-auto transform rotate-3 py-4 rounded min-height-700 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl font-extrabold">Projects</h4>
        <Link
          to="/projects"
          className="inline-block border-4 border-transparent bg-light-green rounded-lg py-4 px-8 font-bold hover:bg-white hover-light-green shadow-xl"
        >
          Read More
        </Link>
      </div>
      <div
        className="message-div col-start-2 mb-20 bg-white min-height-700 rounded"
        style={{
          clipPath:
            "polygon(0 0, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
        }}
      >
        <div className="message-div col-start-2 mb-36 bg-white  min-height-500 transform scale-90 rounded py-4 shadow-xl box-border">
          <h4 className="text-3xl font-extrabold mb-3">
            Want to get in touch?
          </h4>
          <p className="text-xl font-bold mb-5">Send me a message below</p>
          <form>
            <div className="my-3 mx-4">
              <label className="text-lg font-semibold text-left block">
                Enter your email
              </label>
              <input
                className="block m-auto w-full rounded  border-2 border-gray-200 focus:ring-2 focus:ring-yellow-200 focus:outline-none"
                type="email"
                required
              ></input>
            </div>
            <div className="my-3 mx-4">
              <label className="text-lg font-semibold text-left block">
                Write your message
              </label>
              <textarea className="rounded block m-auto w-full h-48 resize-none border-2 border-gray-200 focus:ring-2 focus:ring-yellow-200 focus:outline-none"></textarea>
            </div>
            <button className="inline-block my-4 border-2 border-white no-bg-gradient green-gradient rounded-lg py-3 px-6 font-bold hover-medium-green shadow-xl">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
