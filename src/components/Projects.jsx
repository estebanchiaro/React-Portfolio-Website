

export function Projects({children}) {
  return (
    <section className="shadow-lg rounded">
          <h3 className="text-3xl py-10 dark:text-cyan-50">
            {" "}
            Portfolio Projects
          </h3>
          <div className="grid gap-6 place-items-center md:grid-cols-2 xl:grid-cols-4 max-w-auto">
            {children}
          </div>
    </section>
    )  
}