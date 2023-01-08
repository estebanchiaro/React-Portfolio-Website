import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export function Navbar({setDarkMode}) {
  return (
    <nav className="flex justify-between p-5">
      <h1 className="text-lg dark:text-cyan-50 mt-4">Developed By Esteban</h1>
      <ul className="flex items-center mt-4">
        <li>
          <BsFillMoonStarsFill
            onClick={setDarkMode}
            className="cursor-pointer text-3xl dark:text-cyan-50"
          />
        </li>
        <li>
          <a
            href="/resume.docx"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            download
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

