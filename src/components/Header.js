import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdComputer } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

export default function Header() {
  const [displayNav, setDisplayNav] = useState("hidden");

  const toggleNav = () => {
    if (displayNav === "hidden") {
      setDisplayNav("block");
    } else {
      setDisplayNav("hidden");
    }
  };

  return (
    <header className="bg-white grid grid-cols-1 items-center py-10 shadow-xl">
      <nav id="main-nav" className="grid grid-cols-4 items-center">
        <NavLink  exact
            to="/" className="block col-span-2 lg:col-span-1">
          <h2 className="text-3xl ml-5">
            <span className="text-4xl font-extrabold">David</span>{" "}
            <span className="font-semibold">Lidebrandt</span>
            <p className="text-sm">
             <span className="text-darker-green font-extrabold">SOFTWARE DEVELOPER </span><MdComputer className="inline" />
            </p>
          </h2>
        </NavLink>
        <div className="col-span-3 text-lg font-bold text-right mr-3 hidden xl:block">
          <NavLink
            exact
            to="/"
            className="mx-5 py-4 px-5 rounded border-4 border-transparent relative"
            activeClassName="custom-underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutme"
            className="mx-5 py-4 px-5 rounded border-4 border-transparent relative"
            activeClassName="custom-underline"
          >
            About me
          </NavLink>
          <NavLink
            to="/techstack"
            className="mx-5 py-4 px-5 rounded border-4 border-transparent relative"
            activeClassName="custom-underline"
          >
            Technologies
          </NavLink>
          <NavLink
            to="/projects"
            className="mx-5 py-4 px-5 rounded border-4 border-transparent relative"
            activeClassName="custom-underline"
          >
            Projects
          </NavLink>
          <a
            href="#contact"
            className="mx-5 py-4 px-6 rounded border-4 border-transparent"
          >
            Contact
          </a>
        </div>
        <div onClick={toggleNav} className="col-span-2 lg:col-span-3 xl:hidden">
          <div className="float-right mr-4">
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
          </div>
        </div>
        <div className={"col-span-4 font-bold mx-3 " + displayNav}>
          <div className="my-6 font-extrabold text-lg">
            <NavLink
              onClick={toggleNav}
              exact
              to="/"
              className="my-4 px-5 py-4 rounded border-4 border-transparent hover:border-yellow-100 relative w-max m-auto block"
              activeClassName="custom-underline"
            >
              Home
            </NavLink>
            <NavLink
              onClick={toggleNav}
              to="/aboutme"
              className="my-4 px-5 py-4 rounded border-4 border-transparent hover:border-yellow-100 relative w-max m-auto block"
              activeClassName="custom-underline"
            >
              About me
            </NavLink>
            <NavLink
              onClick={toggleNav}
              to="/techstack"
              className="my-4 px-5 py-4 rounded border-4 border-transparent hover:border-yellow-100 relative w-max m-auto block"
              activeClassName="custom-underline"
            >
              Tech Stack
            </NavLink>
            <NavLink
              onClick={toggleNav}
              to="/projects"
              className="my-4 px-5 py-4 rounded border-4 border-transparent hover:border-yellow-100 relative w-max m-auto block"
              activeClassName="custom-underline"
            >
              Projects
            </NavLink>
            <a
              href="#contact"
              onClick={toggleNav}
              className="my-4 py-4 px-5 rounded border-4 border-transparent hover:border-yellow-100 relative w-max m-auto block text-center"
            >
              Contact
            </a>
            <button
              className="block border-4 border-transparent font-semibold py-16 m-auto"
              onClick={toggleNav}
            >
              <FaWindowClose size={40} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
