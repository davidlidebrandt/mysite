import React from "react";
import diploma from "../images/project-images/diploma.png";
import { FaBookReader } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { FaDumbbell } from "react-icons/fa";

export default function About() {
  return (
    <div className="grid grid-cols-3 text-center text-xl font-bold">
      <div className="col-span-3  py-2 px-2 m-auto mt-20 bg-white rounded shadow-2xl green-gradient">
      <div className="bg-white py-8 px-20">
        <h2 className="type-writer-text-14">Get to know me</h2>
        </div>
      </div>
      <div className="w-2/3 bg-white my-36 m-auto transform -rotate-3 py-4 rounded min-height-700 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <div className="inline-block">
          <h4 className="text-2xl font-extrabold">
            My Story <GoPerson className="inline ml-2" />
          </h4>
          <hr className="border-t-8 border-darker-green mt-2"></hr>
        </div>
        <p className="px-4 my-3">
            ...The course lasted for nine months and was both 
            challenging and really rewarding, it gave me the tools needed to create, debug and deploy applications on the web and a good basic understanding of 
            many general concepts within the world of programming and software development.
        </p>
        <p className="px-4 my-3">
            In the course we created, tested, documented and deployed several applications by ourself which was what we were graded on. We used version control via Git
            and stored our repositories on Github, we created basic wireframes and mockups for our applications and documented the process
             extensively in the projects README files. We deployed our purely frontend applications on Github pages and our fullstack applications on Heroku.
             The main languages/frameworks that we used were JavaScript, CSS, HTML, Python, Django, Flask, JQuery and Bootstrap.
        </p>
        <p className="px-4 my-3">After having finished the course I'm continuing my journey as a software developer by creating new projects, learning new technologies and sharpening my
            skills in previously known areas. At the moment I'm really into React.js and Tailwind CSS which were used to create this site and I'm looking into using
            Next.js for the fronted and Strapi for the backend for my next project.
        </p>
      </div>
      <div className="w-2/3 bg-white my-36 m-auto py-4 rounded min-height-700 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <div className="inline-block">
          <h4 className="text-2xl font-extrabold">
            Education <FaBookReader className="inline ml-2" />
          </h4>
          <hr className="border-t-8 border-medium-green mt-2"></hr>
        </div>
        <img
          className="w-full rounded m-auto p-5"
          src={diploma}
          alt="Project screenshot"
        ></img>
      </div>
      <div className="w-2/3 bg-white my-36 m-auto transform rotate-3 py-4 rounded min-height-700 transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <div className="inline-block">
          <h4 className="text-2xl font-extrabold">
            When I'm Not Coding <FaDumbbell className="inline ml-2" />{" "}
          </h4>
          <hr className="border-t-8 border-light-green mt-2"></hr>
        </div>
      </div>
    </div>
  );
}
