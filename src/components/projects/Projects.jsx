import "./projects.css";
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Featured Projects</h2>
        <div className="project">
          <div>
            <BiCameraMovie />
          </div>
          <div>
            <h3>Movie Planet</h3>
            <p>
              MoviePlanet is a website that uses TMDB API and allows you to
              discover movies and tv shows.
            </p>
            <div>
              <span>ReactJS</span>
              <span>CSS</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Projects;
