import React from 'react'
import { code } from "../assets/img";


export function About() {
  return (
    <section className="shadow-lg rounded-xl">
          <div>
            <h3 className="text-3xl dark:text-cyan-50 font-semibold">About Me</h3>
            <div className='xl: text-xl  sm:ml-5 mr-5'>
            <p className="py-5 leading-6 text-gray-800 dark:text-cyan-50">
              Innovative tech mind with 2 years of experience learning as a web developer.
              <span className="text-teal-500">
                {" "}
                Capable of working with a variety of technology and software
                solutions, and front end languages.
              </span>{" "}
              Valuable team member who has experience diagnosing problems and
              developing solutions.
            </p>

            <p className="py-6 leading-6 text-gray-800 dark:text-cyan-50 text-2xl font-semibold">
              <div className='mb-4'>Programming languages: </div> 
              <div className='mb-2'>HTML</div> 
              <div className='mb-2'>CSS</div> 
              <div className='mb-2'>JAVASCRIPT</div> 
              <div className='mb-2'></div> 
              <span className="text-teal-500">React JS</span>{" "}
            </p>
            </div>
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
  )
}
