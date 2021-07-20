import React from 'react'
import {NavLink,Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-white h-36 grid grid-cols-1 items-center">
            <nav className="grid grid-cols-2 items-center">
                <div>
                <h2 className="text-3xl ml-3">
                    <span className="font-extrabold text-4xl">David</span> <span>Lidebrandt</span>
                    <p className="text-sm">SOFTWARE DEVELOPER</p>
                </h2>
                </div>
                <div className="text-lg font-semibold text-right mr-3">
                    <NavLink exact to="/" className="mx-5 py-4 px-6 rounded border-4 border-transparent hover:border-yellow-100 relative" activeClassName="custom-underline">Home</NavLink>
                    <a className="mx-5 py-4 px-6 rounded border-4 border-transparent hover:border-yellow-100">About me</a>
                    <a className="mx-5 py-4 px-6 rounded border-4 border-transparent hover:border-green-100">Tech Stack</a>
                    <NavLink to="/projects" className="mx-5 py-4 px-6 rounded border-4 border-transparent hover:border-green-100 relative" activeClassName="custom-underline">Projects</NavLink>
                    <a className="mx-5 py-4 px-6 rounded border-4 border-transparent hover:border-green-100">Contact</a>
                </div>
            </nav>
        </header>
    )
}
