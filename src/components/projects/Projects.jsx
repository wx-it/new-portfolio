import "./projects.css";
import { BiCameraMovie, BiBookmarkAlt } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Featured Projects</h2>
      <a target="blank" href="https://movie-planet-wxit.vercel.app/">
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
      </a>

      <a target="blank" href="https://explora-life.vercel.app/">
        <div className="project">
          <div>
            <BiBookmarkAlt />
          </div>
          <div>
            <h3>ExploraLife</h3>
            <p>ExploraLife is a landing page built for an online magazine</p>
            <div>
              <span>ReactTS</span>
              <span>TailwindCSS</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
