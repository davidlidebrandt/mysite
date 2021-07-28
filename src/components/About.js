import React from "react";
import { useEffect } from "react";
import diploma from "../images/project-images/diploma.png";
import { FaBookReader } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { FaDumbbell } from "react-icons/fa";

export default function About() {
  useEffect(()=> {
    window.scrollTo(0,0)
  })

  return (
    <div className="grid grid-cols-12  text-center text-xl font-bold">
      <div className="col-span-12  py-2 px-2 m-auto mt-20 bg-white rounded shadow-2xl green-gradient">
        <div className="bg-white py-3 px-6 xl:py-8 xl:px-16 rounded">
          <h2 className="type-writer-text-14">Get to know me</h2>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4 md:col-span-10 md:col-start-2  w-full xl:w-3/4 bg-white mt-20 mb-0 xl:mb-20 m-auto transform md:-rotate-3 py-4 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <div className="inline-block">
          <h4 className="text-2xl font-extrabold">
            My Story <GoPerson className="inline ml-2" />
          </h4>
          <hr className="border-t-8 border-darker-green mt-2"></hr>
        </div>
        <p className="px-4 my-3">
          ...The course at Code Institute lasted for nine months and was both
          challenging and really rewarding, it gave me the tools needed to
          create, debug and deploy applications on the web and a good basic
          understanding of many general concepts within the world of programming
          and software development.
        </p>
        <p className="px-4 my-3">
          In the course I created, tested, documented and deployed several
          applications by myself which I was graded on. I used version control
          via Git and stored my repositories on Github, I created basic
          wireframes and mockups for my applications, documented the process
          extensively in the projects README files and deployed the projects on
          Heroku/Github pages. The main languages/frameworks used were
          JavaScript, CSS, HTML, Python, Django, Flask, JQuery and Bootstrap.
        </p>
        <p className="px-4 my-3">
          After having finished the course I'm continuing my journey as a
          software developer by creating new projects, learning new technologies
          and sharpening my skills in previously known areas. At the moment I'm
          really into React.js and Tailwind CSS which were used to create this
          site and I'm currently looking into other technologies such as Next.js and Strapi.
        </p>
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-2  xl:col-span-4 ">
        <div className="w-full bg-white mt-20 mb-0 xl:mb-20 xl:w-3/4 m-auto py-4 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <div className="inline-block">
          <h4 className="text-2xl font-extrabold">
            Education <FaBookReader className="inline ml-2" />
          </h4>
          <hr className="border-t-8 border-medium-green mt-2"></hr>
        </div>
        <img
          className="rounded m-auto my-3 max-h-96 border shadow-xl"
          src={diploma}
          alt="Project screenshot"
        ></img>
        <h6 className="mx-4 font-extrabold">Diploma in Fullstack Software Development from Code Institute</h6>
        <p className="mx-4 mb-3">August 2020 - May 2021</p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-2  xl:col-span-4">
        <div className="w-full xl:w-3/4 mt-20 bg-white h-max-content m-auto mb-20 transform md:rotate-3 py-4 rounded transform hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl grid place-items-center">
        <div className="inline-block">
          <h4 className="text-2xl font-extrabold">
            When I'm Not Coding <FaDumbbell className="inline ml-2" />
          </h4>
          <hr className="border-t-8 border-light-green mt-2 mb-4"></hr>
        </div>
        <div className="my-4">
            <p className="px-4"><span className="font-extrabold">Training - </span> I really enjoy physical activities and especially strength training which I engage in in a regular basis.</p>
        </div>
        <div className="my-4">
            <p className="px-4"><span className="font-extrabold">Reading - </span>I like reading books and articles from different fields such as science, history, psychology, religion , training and nutrition.</p>
        </div>
        <div className="my-4">
            <p className="px-4"><span className="font-extrabold">Sports - </span>As a former basketball player and a big sports fan I enjoy both watching and participating in different sports.
        
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}
