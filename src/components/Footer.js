import React from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white font-semibold grid grid-cols-2 items-center">
      <div id="contact" className="ml-5 py-8">
        <a
          href="https://github.com/davidlidebrandt"
          className="text-4xl mx-12 cursor-pointer"
        >
          <FaGithubSquare className="inline transform hover:scale-150 transform transition-all duration-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-lidebrandt-5842411b6/"
          className="text-4xl mx-12 cursor-pointer"
        >
          <FaLinkedin className="inline transform hover:scale-150 transform transition-all duration-700" />
        </a>
        <button className="text-4xl mx-12">
          <FaEnvelopeSquare className="inline transform hover:scale-150 transform transition-all duration-700" />
        </button>
      </div>
      <div className="text-right green-gradient py-8">
        <p className="mb-6 mr-8 font-bold">
          Site created by David Lidebrandt
        </p>
        <a
          className="mr-8 font-bold"
          href="https://www.freepik.com/vectors/background"
        >
          Background vector created by rawpixel.com - www.freepik.com
        </a>
      </div>
    </footer>
  );
}
