import React from 'react'
import { useState } from 'react'
import {NavLink,Link } from 'react-router-dom'

export default function Header() {
    const [displayNav, setDisplayNav] = useState("hidden");

    const toggleNav = () => {
        if (displayNav === "hidden") {
            setDisplayNav("block")
        }
        else {
            setDisplayNav("hidden")
        }
    }
    
    return (
        <header className="bg-white grid grid-cols-1 items-center py-10">
            <nav className="grid grid-cols-4 items-center">
                <div className="col-span-2 lg:col-span-1">
                <h2 className="text-3xl ml-3">
                    <span className="font-extrabold text-4xl">David</span> <span>Lidebrandt</span>
                    <p className="text-sm">SOFTWARE DEVELOPER</p>
                </h2>
                </div>
                <div className="col-span-3 text-lg font-semibold text-right mr-3 hidden xl:block">
                    <NavLink exact to="/" className="mx-5 py-4 px-5 rounded border-4 border-transparent hover:border-yellow-100 relative" activeClassName="custom-underline">Home</NavLink>
                    <NavLink to="/aboutme" className="mx-5 py-4 px-5 rounded border-4 border-transparent hover:border-yellow-100">About me</NavLink>
                    <NavLink to="/techstack" className="mx-5 py-4 px-5 rounded border-4 border-transparent hover:border-green-100">Tech Stack</NavLink>
                    <NavLink to="/projects" className="mx-5 py-4 px-5 rounded border-4 border-transparent hover:border-green-100 relative" activeClassName="custom-underline">Projects</NavLink>
                    <a className="mx-5 py-4 px-6 rounded border-4 border-transparent hover:border-green-100">Contact</a>
                </div>
                <div onClick={toggleNav} className="col-span-2">
                    <div className="float-right mr-4">
                    <div className="hamburger-icon"></div>
                    <div className="hamburger-icon"></div>
                    <div className="hamburger-icon"></div>
                    </div>
                </div>
                <div className={"col-span-4 font-semibold mx-3 " + displayNav}>
                    <NavLink exact to="/" className="py-4 rounded border-4 border-transparent hover:border-yellow-100 relative block w-max" activeClassName="custom-underline">Home</NavLink>
                    <NavLink to="/aboutme" className="py-4 rounded border-4 border-transparent hover:border-yellow-100 block w-max">About me</NavLink>
                    <NavLink to="/techstack" className="py-4 rounded border-4 border-transparent hover:border-green-100 block w-max">Tech Stack</NavLink>
                    <NavLink to="/projects" className="py-4 rounded border-4 border-transparent hover:border-green-100 relative block w-max" activeClassName="custom-underline">Projects</NavLink>
                    <a className="py-4 rounded border-4 border-transparent hover:border-green-100 block">Contact</a>
                    <button className="block border-4 border-transparent" onClick={toggleNav}>Close</button>
                </div>
            </nav>
        </header>
    )
}
