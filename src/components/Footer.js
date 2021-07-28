import React from "react";
import { useHistory } from "react-router-dom";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

export default function Footer(props) {

  const navigate = useHistory();
 
  function clickMessageIcon() {
    props.setLinkToMessage(true)
    navigate.push("/")
  }

  return (
    <footer className="bg-white font-semibold grid grid-cols-2 items-center custom-box-shadow">
      <div id="contact" className="col-span-2 xl:col-span-1 py-8 text-center xl:text-left">
        <a
          href="https://github.com/davidlidebrandt"
          className="text-4xl mr-5 ml-8 cursor-pointer"
        >
          <FaGithubSquare className="inline transform hover:scale-150 transform transition-all duration-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-lidebrandt-5842411b6/"
          className="text-4xl mx-8 cursor-pointer"
        >
          <FaLinkedin className="inline transform hover:scale-150 transform transition-all duration-700" />
        </a>
        <button onClick={clickMessageIcon}  className="text-4xl mx-8">
          <FaEnvelopeSquare className="inline transform hover:scale-150 transform transition-all duration-700" />
        </button>
      </div>
      <div className="col-span-2 xl:col-span-1 green-gradient py-8 text-center xl:text-right xl:px-5">
        <p className="mb-6 font-bold">
          Site created by David Lidebrandt
        </p>
        <a
          className="font-bold"
          href="https://www.freepik.com/vectors/background"
        >
          Background vector created by rawpixel.com - www.freepik.com
        </a>
      </div>
    </footer>
  );
}
