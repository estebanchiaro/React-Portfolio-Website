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


//     <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
//     <div className="basis-1/3 flex-1 ">
    
//     <h3 className='text-center'>Tic Tac Toe Game</h3>
//      <a href={link}>  <img src={image} alt="" className=" rounded-lg object-cover hover:scale-125
// transition delay-100 duration-300 ease-in-out" /> </a>
//     </div>

    {/* <div className="basis-1/3 flex-1">
     <a href="https://estebanchiaro.github.io/Touch-slider/"> <img src={ipad} alt="" className="h-full rounded-lg object-cover hover:scale-125
transition delay-100 duration-300 ease-in-out " /> </a>
    </div>

    <div className="basis-1/3 flex-1">
      <a href="https://estebanchiaro.github.io/memoryGame/"> <img src={memoryGame} alt="" className="h-full rounded-lg object-cover hover:scale-125
transition delay-100 duration-300 ease-in-out " /></a>
    </div>

    <div className="basis-1/3 flex-1">
     <a href="https://estebanchiaro.github.io/taskList1.2/"> <img src={todoList} alt="" className="rounded-lg object-cover hover:scale-125
transition delay-100 duration-300 ease-in-out " /></a>
    </div>
    <div className="basis-1/3 flex-1">
     <a href="https://estebanchiaro.github.io/Rick-MortyAPI/"> <img src={rmapi} alt="" className="h-full rounded-lg object-cover hover:scale-125
transition delay-100 duration-300 ease-in-out " /> </a>
    </div>
    <div className="basis-1/3 flex-1">
     <a href="https://estebanchiaro.github.io/Mario-Matching-Game1.1/"> <img src={mario} alt="" className="rounded-lg object-cover hover:scale-125
transition delay-100 duration-300 ease-in-out " /></a>
    </div> */}
//   </div>
  
}
