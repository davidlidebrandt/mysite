import React from "react";
import { useEffect } from "react";
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
  SiMongodb
} from "react-icons/si";

export default function Teach() {
  useEffect(()=> {
    window.scrollTo(0,0)
  })
  return (
    <div className="grid grid-cols-12 text-center text-xl font-bold">
      <div className="col-span-12 w-max-content  py-2 px-2 m-auto mt-20 bg-white rounded shadow-2xl green-gradient">
        <div className="bg-white py-3 px-3 xl:py-8 xl:px-16">
        <h2 className="type-writer-text-23">Tech I have worked with</h2>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-3  w-full xl:col-start-4  xl:col-span-2 m-auto mt-0">
        <div className="bg-white mt-20 m-auto transform md:-rotate-3 rounded relative min-height-450 transform xl:scale-110 xl:hover:scale-125 hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl py-4 font-extrabold">Languages</h4>
        <div className="center-absolute-xy top-12 z-50 font-bold">
          <p className="text-2xl my-8">
            JavaScript <SiJavascript className="inline" />
          </p>
          <p className="text-2xl my-8">
            Python <SiPython className="inline" />
          </p>
          <p className="text-2xl my-8">
            CSS <SiCss3 className="inline" />
          </p>
          <p className="text-2xl my-8">
            HTML <SiHtml5 className="inline" />
          </p>
          <p className="text-2xl my-8 z-50">
            Java <SiJava className="inline" />
          </p>
        </div>
        <div
          className="absolute bg-darker-green h-3/4 bottom-0 w-full z-20 opacity-50"
          style={{
            clipPath:
              "polygon(0 51%, 100% 0%, 100% 75%, 100% 100%, 75% 100%, 52% 100%, 0 100%)",
          }}
        ></div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-2  w-full  xl:col-span-2 m-auto mt-0">
        <div className="bg-white mt-20 m-auto rounded relative min-height-550 transform xl:scale-110 xl:hover:scale-125 hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl py-4 font-extrabold">Frameworks</h4>
        <div className="center-absolute-xy top-12 z-50 font-bold">
          <p className="text-2xl my-8">
            React <SiReact className="inline" />
          </p>
          <p className="text-2xl my-8">
            Django <SiDjango className="inline" />
          </p>
          <p className="text-2xl my-8">
            Flask <SiFlask className="inline" />
          </p>
          <p className="text-2xl my-8">
            Tailwind CSS <SiTailwindcss className="inline" />
          </p>
          <p className="text-2xl my-8">
            Bootstrap <SiBootstrap className="inline" />
          </p>
          <p className="text-2xl my-8">
            JQuery <SiJquery className="inline" />
          </p>
        </div>
        <div className="absolute bg-medium-green w-full bottom-0 z-20 h-2/3 opacity-50"></div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 md:col-start-2  w-full  xl:col-span-2 m-auto mt-0">
        <div className="bg-white my-20 m-auto transform md:rotate-3 min-height-700 rounded relative transform xl:scale-110 xl:hover:scale-125 hover:scale-105 hover:rotate-0 transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl py-4 font-extrabold">Other</h4>
        <div className="center-absolute-xy top-12 z-50 font-bold">
          <p className="text-2xl my-8">
            MongoDB <SiMongodb className="inline" />
          </p>
          <p className="text-2xl my-8">
            Git <SiGit className="inline" />
          </p>
          <p className="text-2xl my-8">
            Github <SiGithub className="inline" />
          </p>
          <p className="text-2xl my-8">
            Visual Studio Code <SiVisualstudiocode className="inline" />
          </p>
          <p className="text-2xl my-8">
            Gitpod <SiGitpod className="inline" />
          </p>
          <p className="text-2xl my-8">
            Heroku <SiHeroku className="inline" />
          </p>
          <p className="text-2xl my-8">
            Stripe <SiStripe className="inline" />
          </p>
          <p className="text-2xl my-8">
            Adobe XD <SiAdobexd className="inline" />
          </p>
        </div>
        <div
          className="absolute bg-light-green h-3/4 bottom-0 w-full z-20 opacity-50"
          style={{
            clipPath:
              "polygon(0 0, 100% 50%, 100% 75%, 100% 100%, 75% 100%, 52% 100%, 0 100%)",
          }}
        ></div>
      </div>
      </div>
    </div>
  );
}
