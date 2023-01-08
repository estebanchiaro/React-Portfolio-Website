export function CardProject({ projectname, image, link }) {
  return (
    <div className="px-2 flex flex-col w-64 dark:bg-slate-800 mb-12 rounded overflow-hidden shadow-lg hover:scale-110 transition delay-100 duration-300 ease-in-out">
      <div className="">
        <a href={link}>
          <img
            className="w-64 h-56 object-cover"
            src={image}
            loading="lazy"
            alt={""}
          />
        </a>
      </div>

      <div className="p-6">
        <div className="dark:text-cyan-50 text-center">{projectname}</div>
      </div>
    </div>
  );
}
