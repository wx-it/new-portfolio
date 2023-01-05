import GrayLink from "../assets/gray-link.svg"

const Projects = () => {
  return (
    <div className='projects'>
        <h2>PROJECTS</h2>

        <div className='projects--cards'>
            <div className='projects--card'>
                <div className="link">
                  <p>React</p>
                  <a href="">
                      <img src={GrayLink} alt="" />
                  </a>
                </div>
                <h2>Quizzical</h2>
                <p>
                  a quiz app made with React and quiz API.
                </p>
            </div>


            <div className='projects--card'>
                <div className="link">
                  <p>React</p>
                  <a href="">
                      <img src={GrayLink} alt="" />
                  </a>
                </div>
                <h2>Quizzical</h2>
                <p>
                  a quiz app made with React and quiz API.
                </p>
            </div>


            <div className='projects--card'>
                <div className="link">
                  <p>React</p>
                  <a href="">
                      <img src={GrayLink} alt="" />
                  </a>
                </div>
                <h2>Quizzical</h2>
                <p>
                  a quiz app made with React and quiz API.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Projects