import TwitterIcon from "../assets/twitter.svg"
import GitHubIcon from "../assets/github.svg"
import WhiteLink from "../assets/white-link.svg"

const Header = () => {
  return (
    <>
    <div className='header'>
        <h1>Hi, I'm Zineb Bendjafer</h1>
        <p>
        Junior Frontend web Developer with so much passion for learning tech and all the newest technologies, 
        always ready for a challenge and new projects, here to help and her to work. I'm currently working my way towards 
        becoming a MERN stack developer. 
        </p>
        <p>
          Also! I share my journey on both <a href="">Twitter</a> and my personal <a href="">Hashnode</a> blog.
        </p>

        <div className='links'>
            <div className="twitter">
                <img src={TwitterIcon} alt="" />
                <span>Twitter</span>
                <a href="">
                    <img src={WhiteLink} alt="" />
                </a>
            </div>

            <div className="github">
                <img src={GitHubIcon} alt="" />
                <span>GitHub</span>
                <a href="">
                    <img src={WhiteLink} alt="" />
                </a>
            </div>
        </div>
    </div>

<nav>
<div className='tab'>
    <span>01</span>
    <span className='line'></span>
    <a href="">PROJECTS</a>
</div>

<div className='tab'>
    <span>02</span>
    <span className='line'></span>
    <a href="">CONTACT</a>
</div>
</nav>

<div className='links desktop-links'>
            <div className="twitter">
                <img src={TwitterIcon} alt="" />
                <span>Twitter</span>
                <a href="">
                    <img src={WhiteLink} alt="" />
                </a>
            </div>

            <div className="github">
                <img src={GitHubIcon} alt="" />
                <span>GitHub</span>
                <a href="">
                    <img src={WhiteLink} alt="" />
                </a>
            </div>
        </div>
    </>
  )
}

export default Header