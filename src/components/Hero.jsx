import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { avatar } from '../assets/img'

export const Hero = () => {
  return (
    <section className="mb-14">
      <div className="text-center p-10">
        <h2 className="text-3xl py-2 text-teal-600 font-extrabold">
          Esteban Chiaromonte
        </h2>
        <h3 className="text-2xl py-2 dark:text-cyan-50">Software Developer</h3>
        <div className="xl:text-xl">
        <p className="text-md py-1 leading-7 text-gray-800 dark:text-cyan-50 font-bold">
          Enthusiastic and motivated self-learning about programming languages.{" "}
          <span className="text-teal-500">
            Here you will find some of the projects I have build
          </span>{" "}
          focus on web development and front end technologies
        </p>
        </div>
      </div>
      <div className="mb-0 text-6xl flex justify-center gap-10 text-black-800 cursor-pointer animate-pulse dark:text-cyan-50">
        <a
          href="https://www.linkedin.com/in/esteban-chiaromonte-1628701a0/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>

        <a href="https://github.com/estebanchiaro" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mt-0 py-0 mx-auto rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96">
        <img
          src={avatar}
          className="mt-0 scale-100 hover:scale-75
              transition delay-150 duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};
