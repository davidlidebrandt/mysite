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
                    <NavLink to="/aboutme" className="mx-5 py-4 px-5 rounded border-4 border-transparent hover:border-yellow-100 relative" activeClassName="custom-underline">About me</NavLink>
                    <NavLink to="/techstack" className="mx-5 py-4 px-5 rounded border-4 border-transparent hover:border-green-100 relative" activeClassName="custom-underline">Tech Stack</NavLink>
                    <NavLink to="/projects" className="mx-5 py-4 px-5 rounded border-4 border-transparent hover:border-green-100 relative" activeClassName="custom-underline">Projects</NavLink>
                    <a href="#contact" className="mx-5 py-4 px-6 rounded border-4 border-transparent hover:border-green-100">Contact</a>
                </div>
                <div onClick={toggleNav} className="col-span-2 lg:col-span-3 xl:hidden">
                    <div className="float-right mr-4">
                    <div className="hamburger-icon"></div>
                    <div className="hamburger-icon"></div>
                    <div className="hamburger-icon"></div>
                    </div>
                </div>
                <div className={"col-span-4 font-semibold mx-3 " + displayNav}>
                    <div className="my-6">
                        <NavLink onClick={toggleNav} exact to="/" className="py-5 rounded border-4 border-transparent hover:border-yellow-100 relative block w-max m-auto" activeClassName="custom-underline">Home</NavLink>
                        <NavLink onClick={toggleNav} to="/aboutme" className="py-5 rounded border-4 border-transparent hover:border-yellow-100 block w-max m-auto">About me</NavLink>
                        <NavLink onClick={toggleNav} to="/techstack" className="py-5 rounded border-4 border-transparent hover:border-green-100 block w-max m-auto">Tech Stack</NavLink>
                        <NavLink onClick={toggleNav} to="/projects" className="py-5 rounded border-4 border-transparent hover:border-green-100 relative block w-max m-auto" activeClassName="custom-underline">Projects</NavLink>
                        <a href="#contact" onClick={toggleNav} className="py-5 rounded border-4 border-transparent hover:border-green-100 block text-center">Contact</a>
                        <button className="block border-4 border-transparent font-semibold py-12 m-auto" onClick={toggleNav}>Close</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
