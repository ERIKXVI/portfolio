const Projects = () => {
    const projects = [
        {
            title: "Project-Kero",
            duration: "May 2024 - Present",
            description: "Project-Kero is my latest project, It's a cs2 hvh cheat for me and my friends. The idea behind it was mainly so I don't need to pay for cheats.",
            link: ""
        },
        {
            title: "School Work",
            duration: "Feb 2023 - June 2024",
            description: "This isn't really a project if you think about it but I'm gonna include it anyways. This is the all my school work after we started working with github",
            link: "https://github.com/ERIKXVI/School-Work"
        },
        {
            title: "Timeout-Tool",
            duration: "October 2023 - October 2023",
            description: "The timeout tool is a small project that was aimed to mess with the cops on a fivem server without getting banned for disconnecting ",
            link: "https://github.com/ERIKXVI/Timeout-tool"
        },
        {
            title: "Pastehub",
            duration: "June 2022 - december 2022",
            description: "Pastehub was me and my friends Roblox script for phantom forces we ended up discontinuing it. R.I.P Pastehub",
            link: ""
        },


    ];

    return (
        <section id="projects" className="mt-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Projects</h2>
            <div className="flex flex-wrap justify-center items-start">
                {projects.map((project, index) => (
                    <div key={index}
                         className="max-w-2xl m-4 bg-zinc-700 shadow-md rounded px-4 pt-6 pb-8 mb-4 flex flex-col">
                        <div className="font-bold text-xl mb-2 text-amber-50">{project.title}</div>
                        <p className="text-sm text-amber-50">{project.duration}</p>
                        <p className="text-base mb-2 text-amber-50">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                           className="text-blue-500 hover:text-blue-800 text-sm mt-2">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;