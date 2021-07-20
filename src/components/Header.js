import React from 'react'

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
                    <a className="mx-5 py-3 px-6 rounded border-4 border-transparent hover:border-yellow-100">About me</a>
                    <a className="mx-5 py-3 px-6 rounded border-4 border-transparent hover:border-green-100">Tech Stack</a>
                    <a className="mx-5 py-3 px-6 rounded border-4 border-transparent hover:border-green-200">Projects</a>
                    <a className="mx-5 py-3 px-6 rounded border-4 border-transparent hover:border-green-300">Contact</a>
                </div>
            </nav>
        </header>
    )
}
