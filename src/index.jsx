import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import code from "../public/public/code.png";
import ipad from "../public/public/ipad.png";
import tictactoe from "../public/public/tictactoe.jpg";
import memoryGame from "../public/public/memoryGame.webp";
import todoList from "../public/public/todoList.jpg";
import rmapi from "../public/public/rmapi.webp";
import mario from "../public/public/mario.jpg";
import Projects from "./projects";
import me from "../public/public/me2.jpg";

import { useState } from "react";

function index() {
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark sm:w-full" : "sm:w-full"}>
      <main className="bg-slate-200 lg:px-40 dark:bg-gray-900 sm:w-full sm:h-full">
        <section className="min-h-screen">
          <nav className="flex justify-between py-5 px-5">
            <h1 className="text-l dark:text-cyan-50">Developed By Esteban</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setdarkmode(!darkmode)}
                  className="cursor-pointer text-xl dark:text-cyan-50"
                />
              </li>
              <li>
                <a
                  href="./public/Esteban+Chiaromonte+coding.docx"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">
              Esteban Chiaromonte
            </h2>
            <h3 className="text-2xl py-2 dark:text-cyan-50">
              Software Developer
            </h3>
            <p className="text-md py-1 leading-7 text-gray-800 dark:text-cyan-50">
              Enthusiastic and motivated self-learning about programming
              languages. <span className="text-teal-500">Here you will find some of the projects I have build</span>{" "}
              focus on web development and front end technologies
            </p>
          </div>
          <div className="text-6xl flex justify-center gap-10 text-black-800 cursor-pointer animate-pulse dark:text-cyan-50">
            <a href="https://www.linkedin.com/in/esteban-chiaromonte-1628701a0/">
              <AiFillLinkedin />
            </a>

            <a href="https://github.com/estebanchiaro">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-10 overflow-hidden md:w-96 md:h-96">
            <img
              src={me}
              className="rounded-full scale-150 py-10 hover:scale-125
    transition delay-150 duration-300 ease-in-out"
            />
          </div>
        </section>

        <section className="shadow-lg p-4 rounded-xl">
          <div>
            <h3 className="text-3xl dark:text-cyan-50">About Me</h3>
            <p className="py-5 leading-6 text-gray-800 dark:text-cyan-50">
              Innovative tech mind with 2 years of experience learning as a web
              developer.
              <span className="text-teal-500">
                {" "}
                Capable of working with a variety of technology and software
                solutions, and front end languages.
              </span>{" "}
              Valuable team member who has experience diagnosing problems and
              developing solutions.
            </p>

            <p className="py-2 leading-6 text-gray-800 dark:text-cyan-50">
              Programming languages: <br />
              HTML <br></br>
              CSS <br></br>
              Javascript <br></br>
              <span className="text-teal-500">React JS</span>{" "}
            </p>
          </div>

          <div>
            <div>
              <img
                src={code}
                alt=""
                className="text-center h-44 m-auto hover:scale-125
    transition delay-150 duration-300 ease-in-out"
              />
            </div>
          </div>
        </section>

        <section className="shadow-lg rounded">
          <h3 className="text-3xl py-10 dark:text-cyan-50">
            {" "}
            Portfolio Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 justify-center">
            <Projects
              projectname={"TicTacToe"}
              image={tictactoe}
              link={"https://estebanchiaro.github.io/TicTacToe/"}
            />
            <Projects
              projectname={"Touch Slider"}
              image={ipad}
              link={"https://estebanchiaro.github.io/Touch-slider/"}
            />
            <Projects
              projectname={"Memory Game"}
              image={memoryGame}
              link={"https://estebanchiaro.github.io/memoryGame/"}
            />
            <Projects
              projectname={"To Do List"}
              image={todoList}
              link={"https://estebanchiaro.github.io/taskList1.2/"}
            />
            <Projects
              projectname={"Rick & Morty API"}
              image={rmapi}
              link={"https://estebanchiaro.github.io/Rick-MortyAPI/"}
            />
            <Projects
              projectname={"Mario Match Game"}
              image={mario}
              link={"https://estebanchiaro.github.io/Mario-Matching-Game1.1/"}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default index;
