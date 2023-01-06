import React from 'react'

export default function projects({projectname, image, link}) {
  return (

<div className="px-2 flex flex-col">
      <div className="dark:bg-slate-800 mb-12 rounded overflow-hidden shadow-lg hover:scale-125 transition delay-100 duration-300 ease-in-out">
        <a href={link}>
        <img
          className="w-64 h-56 object-cover "
          src={image}
          loading="lazy"
          alt={""}
        />
        </a>

        <div className="p-6">
          <div className="flex items-baseline">
            <div className="dark:text-cyan-50">{projectname}</div>
          </div>
        </div>
      </div>
    </div>
    )  
}
