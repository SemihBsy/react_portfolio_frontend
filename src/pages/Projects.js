import { useLoaderData } from "react-router-data";

function Projects(props) {

    const projects = useLoaderData();

    return projects.map((project) => (
        <div>
            <h1>{project.name}</h1>
            <img src={project.img} alt={project.name} />
            <a href={project.git}>
                <button>Github</button>
            </a>
            <a href={project.live}>
                <button>Live Site</button>
            </a>
        </div>
    ));
}

export default Projects;