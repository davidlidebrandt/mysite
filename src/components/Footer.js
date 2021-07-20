import React from 'react'

export default function Footer() {
    return (
        <footer className="h-36 bg-white font-semibold grid grid-cols-2 items-center">
            <div className="ml-5">
                <h4 className="text-xl font-semibold mb-3 mx-4">Contact</h4>
                <a href="https://github.com/davidlidebrandt" className="text-4xl mx-6 hover:text-green-100 cursor-pointer"><i className="fab fa-github-square transform hover:scale-150"></i> </a>
                <a href="https://www.linkedin.com/in/david-lidebrandt-5842411b6/" className="text-4xl mx-6 hover:text-green-100 cursor-pointer"><i className="fab fa-linkedin transform hover:scale-150"></i></a>
                <button className="text-4xl mx-6 hover:text-green-100"> <i className="fas fa-envelope-square transform hover:scale-150"></i></button>
            </div>
            <div className="">
                <p className="">Site created by David Lidebrandt</p>
                <a href="https://www.freepik.com/vectors/background">Background vector created by rawpixel.com - www.freepik.com</a>
            </div>
        </footer>
    )
}
