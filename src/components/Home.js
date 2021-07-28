import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SendEmailForm from "./SendEmailForm";
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
  } from "react-icons/si";

export default function Home(props) {

  const messageDiv = useRef();
  
  useEffect(()=> {

    if (props.linkToMessage) {
      messageDiv.current.scrollIntoView();
      props.setLinkToMessage(false)
    }
    else {
      window.scrollTo(0,0)
    }

  },[]);

    
  return (
    <div className="grid grid-cols-12 text-center text-xl font-bold">
      <div className="col-span-12 w-max-content py-2 px-2 m-auto mt-20 bg-white rounded shadow-2xl green-gradient">
        <div className="bg-white py-3 px-6 xl:py-8 xl:px-16 rounded">
            <h2 className=" type-writer-text-18">Welcome to my site</h2>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-2  xl:col-span-4  w-full  xl:w-11/12  bg-white mt-20 m-auto transform md:-rotate-3 py-4 rounded  transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
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
          Continue Reading
        </Link>
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-2  xl:col-span-4 w-full  xl:w-11/12 bg-white mt-20 m-auto py-2 px-4 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl grid place-items-center">
        <h4 className="text-2xl font-extrabold">Tech I have used</h4>
        
        <div className="grid grid-cols-3 m-4 shadow-xl w-full text-base md:text-lg">
        <div className="m-auto my-3 px-3"><SiJavascript size="25" className="m-auto"/>  JavaScript</div>
        <div className="m-auto my-3 px-3"> <SiPython size="25" className="m-auto"/>Python </div>
        <div className="m-auto my-3 px-3"><SiHtml5 size="25" className="m-auto"/>HTML  </div>
        <div className="m-auto my-3 px-3"><SiCss3 size="25" className="m-auto"/>CSS </div>
        <div className="m-auto my-3 px-3"><SiJava size="25" className="m-auto"/>Java </div>
        </div>
        
        <div className="grid grid-cols-3 m-4 shadow-xl w-full text-base md:text-lg">
        <div className="m-auto my-3 px-3"><SiReact size="25" className="m-auto"/>React </div>
        <div className="m-auto my-3 px-3"><SiFlask size="25" className="m-auto"/>Flask </div>
        <div className="m-auto my-3 px-3"><SiDjango size="25" className="m-auto"/>Django </div>
        <div className="m-auto my-3 px-3"><SiTailwindcss size="25" className="m-auto"/>Tailwind CSS </div>
        <div className="m-auto my-3 px-3"><SiJquery size="25" className="m-auto"/>JQuery </div>
        <div className="m-auto my-3 px-3"><SiBootstrap size="25" className="m-auto"/>Bootstrap </div>
        </div>
        <Link
          to="/techstack"
          className="inline-block border-4 border-transparent my-8 bg-medium-green rounded-lg py-4 px-8 font-bold hover:bg-white hover-medium-green shadow-xl"
        >
          See More
        </Link>
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-2  xl:col-span-4 w-full xl:w-11/12 bg-white mt-20 m-auto transform md:rotate-3 py-4 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl grid place-items-center">
        <h4 className="text-2xl font-extrabold">Projects</h4>
        <p className="mt-4 mb-3 mx-4">
            I have created several projects, both frontend and fullstack applications, during my time at Code Institute which constituted the basis of our assessment 
            for the course.
        </p>
        <p className="my-3 mx-4">
            After graduating I'm continuing to create new projects and building up my portfolio.
        </p>
        <p className="my-3 mx-4">
            Please note that most of the projects are hosted on Heroku and will take moment to load initially but will run as normal after that.
        </p>
        <Link
          to="/projects"
          className="inline-block border-4 my-8 border-transparent bg-light-green rounded-lg py-4 px-8 font-bold hover:bg-white hover-light-green shadow-xl"
        >
          See Projects
        </Link>
      </div>
      <div
        className="message-div col-span-12 md:col-span-10 md:col-start-2  xl:col-span-6 xl:col-start-4 xl:w-10/12 w-full m-auto  my-20 bg-white h-min-content rounded"
        style={{
          clipPath:
            "polygon(0 0, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
        }}
      >
        <div id="message-form" ref={messageDiv} className="col-start-2 bg-white rounded px-4 md:px-8 py-8 pb-52 shadow-xl border-2">
          <h4 className="text-3xl font-extrabold mb-3">
            Want to get in touch?
          </h4>
          <p className="text-xl font-extrabold mb-5">Send me a message below</p>
          <SendEmailForm/>
        </div>
      </div>
    </div>
  );
}
