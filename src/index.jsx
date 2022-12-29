import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import deved from "../public/public/dev-ed-wave.png";
import code from "../public/public/code.png";
import web1 from '../public/public/web1.png'
import web2 from '../public/public/web2.png'
import web3 from '../public/public/web3.png'
import web4 from '../public/public/web4.png'
import web5 from '../public/public/web5.png'
import web6 from '../public/public/web6.png'
import {useState} from 'react'

function index() {
    const [darkmode, setdarkmode] = useState(false)
  return (
    <div className= {darkmode ? "dark sm:w-full" : "sm:w-full"}>
    <main className="bg-white lg:px-40 dark:bg-gray-900 sm:w-full sm:h-full">
      <section className="min-h-screen">
        <nav className="flex justify-between py-3">
          <h1 className="text-l dark:text-cyan-50">Developed By Esteban</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill onClick={()=>setdarkmode(!darkmode)} className="cursor-pointer text-xl dark:text-cyan-50" />
            </li>
            <li>
              <a
                href="#"
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
          <h3 className="text-2xl py-2 dark:text-cyan-50">React Developer</h3>
          <p className="text-md py-1 leading-7 text-gray-800 dark:text-cyan-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            accusamus repellat placeat pariatur eligendi, ullam nam iusto sed
            odit natus commodi necessitatibus earum quam non atque aut possimus!
            Voluptates, quasi.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-10 text-gray-800 cursor-pointer animate-pulse dark:text-cyan-50">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:w-96 md:h-96">
          <img
            src={deved}
            className="scale-125 py-10 hover:scale-100
    transition delay-150 duration-300 ease-in-out"
          />
        </div>
      </section>

      <section className="shadow-lg p-10 rounded-xl">
        <div>
          <h3 className="text-3xl dark:text-cyan-50">About Me</h3>
          <p className="py-5 leading-6 text-gray-800 dark:text-cyan-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            quis <span className="text-teal-500">corporis dicta iusto!</span>{" "}
            Quibusdam odit iusto, assumenda architecto ab quia eius facilis.
            Neque alias, tenetur eos rem laborum temporibus voluptates.
          </p>

          <p className="py-2 leading-6 text-gray-800 dark:text-cyan-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            quis <span className="text-teal-500">corporis dicta iusto!</span>{" "}
            Quibusdam odit iusto, assumenda architecto ab quia eius facilis.
            Neque alias, tenetur eos rem laborum temporibus voluptates.
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

      <section className="shadow-lg p-10 rounded-xl">
      <h3 className="text-3xl py-10 dark:text-cyan-50">Portfolio Projects</h3>  
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
            <img src={web1} alt="" className="rounded-lg object-cover"/>
           
        </div>

        <div className="basis-1/3 flex-1">
            <img src={web2} alt="" className="rounded-lg object-cover "/>
           
        </div>
      </div>      
      </section>
     
    </main>
    </div>
  );
}

export default index;
