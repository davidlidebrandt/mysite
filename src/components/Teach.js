import React from 'react'
import { SiPython, SiReact, SiJava, SiJavascript, SiFlask, SiDjango, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss } from 'react-icons/si'

export default function Teach() {
    return (
        <div className="grid grid-cols-3 text-center text-xl font-bold">
        <div className="col-span-3  py-8 px-16 m-auto mt-20 bg-white rounded">
            <h2 className="type-writer-text">Tech I have worked with</h2>
        </div>
       <div className="w-2/3 bg-white my-36 m-auto transform -rotate-3 py-4 rounded min-height-500 relative">
           <div className="center-absolute top-4 z-50">
            <h4 className="text-2xl mb-20">Languages</h4>
            <p className="text-xl my-8">JavaScript <SiJavascript className="inline"/></p>
            <p className="text-xl my-8">Python <SiPython className="inline"/></p>
            <p className="text-xl my-5">CSS <SiCss3 className="inline"/></p>
            <p className="text-xl my-5">HTML <SiHtml5 className="inline"/></p>
            <p className="text-xl my-8 z-50">Java <SiJava className="inline"/></p>
           </div>
           <div className="absolute bg-yellow-100 h-3/4 bottom-0 w-full z-20" style={{clipPath: "polygon(0 51%, 100% 0%, 100% 75%, 100% 100%, 75% 100%, 52% 100%, 0 100%)"}}></div>
           
           
        </div> 
       <div className="w-2/3 bg-white my-36 m-auto py-4 rounded min-height-500 relative">
            <div className="center-absolute top-4 z-50">
                <h4 className="text-2xl mb-20">Frameworks</h4>
                <p className="text-xl my-8">React <SiReact className="inline"/></p>
                <p className="text-xl my-8">Django <SiDjango className="inline"/></p>
                <p className="text-xl my-8">Flask <SiFlask className="inline"/></p>
                <p className="text-xl my-8">Tailwind CSS <SiTailwindcss className="inline"/></p>
                <p className="text-xl my-8">Bootstrap <SiBootstrap className="inline"/></p>
            </div>
            <div className="absolute bg-green-100 w-full bottom-0 z-20 h-2/3"></div>
        </div> 
       <div className="w-2/3 bg-white my-36 m-auto transform rotate-3 py-4 rounded min-height-500 relative">
            <div className="center-absolute top-4 z-50">
                <h4 className="text-2xl mb-20">Other</h4>
            </div>
            <div className="absolute bg-green-200 h-3/4 bottom-0 w-full z-20" style={{clipPath: "polygon(0 0, 100% 50%, 100% 75%, 100% 100%, 75% 100%, 52% 100%, 0 100%)"}}></div>
        </div> 
    </div>
    )
}
