import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    SiPython,
    SiReact,
    SiJava,
    SiJavascript,
    SiFlask,
    SiDjango,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiTailwindcss,
    SiJquery,
    SiGithub,
    SiGit,
    SiVisualstudiocode,
    SiHeroku,
    SiGitpod,
    SiStripe,
    SiAdobexd,
  } from "react-icons/si";

export default function Home() {
  return (
    <div className="grid grid-cols-3 text-center text-xl font-bold">
      <div className="col-span-3  py-2 px-2 m-auto mt-20 bg-white rounded shadow-2xl green-gradient">
        <div className="bg-white py-8 px-20">
            <h2 className="type-writer-text-18">Welcome to my site</h2>
        </div>
      </div>
      <div className="w-3/4 bg-white my-36 m-auto transform -rotate-3 py-4 rounded  transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl font-extrabold">About Me</h4>
        <p className="px-4 mt-4 mb-3">Hi I'm a newly graduated full stack software developer who is looking to take the step into a professional setting and continuing learning and contribute to 
              become a valuable asset in the industry.
        </p>
        <p className="px-4 my-3">
            A few years back I started conducting self-study in basic programming concepts primarily in the programming language Java. In the summer of 2020 I decided
            to take a real aim at a career in software development and found Code Institute's Fullstack Software Development course. It was the perfect match since I could 
            combine it with my fulltime work as a process operator at a large company in the semiconductor industry. 
        </p>
        <Link
          to="/aboutme"
          className="inline-block border-4 border-transparent my-8 bg-darker-green rounded-lg py-4 px-8 font-bold hover:bg-white hover-darker-green shadow-xl"
        >
          Continue reading
        </Link>
      </div>
      <div className="w-3/4 bg-white my-36 m-auto py-2 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl grid place-items-center">
        <h4 className="text-2xl font-extrabold">Tech I have used</h4>
        
        <div className="grid grid-cols-3 mx-4">
        <div className="m-auto my-3 mx-3"><SiJavascript size="25" className="m-auto"/>  JavaScript</div>
        <div className="m-auto my-3 mx-3"> <SiPython size="25" className="m-auto"/>Python </div>
        <div className="m-auto my-3 mx-3"><SiHtml5 size="25" className="m-auto"/>HTML  </div>
        <div className="m-auto my-3 mx-3"><SiCss3 size="25" className="m-auto"/>CSS </div>
        <div className="m-auto my-3 mx-3"><SiJava size="25" className="m-auto"/>Java </div>
        </div>
        
        <div className="grid grid-cols-3 mx-4">
        <div className="m-auto my-3"><SiReact size="25" className="m-auto"/>React </div>
        <div className="m-auto my-3"><SiFlask size="25" className="m-auto"/>Flask </div>
        <div className="m-auto my-3"><SiDjango size="25" className="m-auto"/>Django </div>
        <div className="m-auto my-3"><SiTailwindcss size="25" className="m-auto"/>Tailwind CSS </div>
        <div className="m-auto my-3"><SiJquery size="25" className="m-auto"/>JQuery </div>
        <div className="m-auto my-3"><SiBootstrap size="25" className="m-auto"/>Bootstrap </div>
        </div>
        <Link
          to="/techstack"
          className="inline-block border-4 border-transparent my-8 bg-medium-green rounded-lg py-4 px-8 font-bold hover:bg-white hover-medium-green shadow-xl"
        >
          See More
        </Link>
      </div>
      <div className="w-3/4 bg-white my-36 m-auto transform rotate-3 py-4 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
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
          <p className="text-xl font-extrabold mb-5">Send me a message below</p>
          <form>
            <div className="my-3 mx-4">
              <label className="text-lg font-bold text-left block">
                Enter your email
              </label>
              <input
                className="block m-auto w-full rounded  border-2 border-gray-200 focus:ring-2 focus:ring-yellow-200 focus:outline-none"
                type="email"
                required
              ></input>
            </div>
            <div className="my-3 mx-4">
              <label className="text-lg font-bold text-left block">
                Write your message
              </label>
              <textarea className="rounded block m-auto w-full h-48 resize-none border-2 border-gray-200 focus:ring-2 focus:ring-yellow-200 focus:outline-none"></textarea>
            </div>
            <div className="my-8 pt-8 relative ">
            <button className="no-bg-gradient green-gradient rounded-lg py-3 px-6 font-bold hover-medium-green shadow-xl center-absolute">
              Send
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
