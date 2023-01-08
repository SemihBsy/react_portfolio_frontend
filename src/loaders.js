// Base URL of our Deployed API
const URL = "https://portfolio-backend-l1mo.onrender.com";

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json();
    return projects;
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json();
    return about;
}