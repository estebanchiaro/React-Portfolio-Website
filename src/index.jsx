import React from "react";
import { Navbar, Projects, Contact, Hero, About, CardProject } from './components'
import { useState } from "react";
import {ipad, tictactoe, memoryGame, todoList, rmapi, mario} from "./assets/img"

function index() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? "dark sm:w-full" : "sm:w-full"} font-Poppins `}>
      <main className={`bg-slate-200 lg:px-40 dark:bg-gray-900 sm:w-full sm:h-full`}>
        <Navbar setDarkMode={() => setDarkMode(!darkMode)}/>
        <Hero />
        <About />
        <Projects>
            <CardProject
              projectname={"TicTacToe"}
              image={tictactoe}
              link={"https://estebanchiaro.github.io/TicTacToe/"}
            />
            <CardProject
              projectname={"Touch Slider"}
              image={ipad}
              link={"https://estebanchiaro.github.io/Touch-slider/"}
            />
            <CardProject
              projectname={"Memory Game"}
              image={memoryGame}
              link={"https://estebanchiaro.github.io/memoryGame/"}
            />
            <CardProject
              projectname={"To Do List"}
              image={todoList}
              link={"https://estebanchiaro.github.io/taskList1.2/"}
            />
            <CardProject
              projectname={"Rick & Morty API"}
              image={rmapi}
              link={"https://estebanchiaro.github.io/Rick-MortyAPI/"}
            />
            <CardProject
              projectname={"Mario Match Game"}
              image={mario}
              link={"https://estebanchiaro.github.io/Mario-Matching-Game1.1/"}
            />
        </Projects>
        <Contact/>
      </main>
    </div>
  );
}

export default index;
