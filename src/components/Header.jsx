import TwitterIcon from "../assets/twitter.svg"
import GitHubIcon from "../assets/github.svg"
import WhiteLink from "../assets/white-link.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Projects from "./Projects";
import Contact from "./Contact";
import { useState } from "react";
import { CSSTransition, Transition } from "react-transition-group";

const Header = () => {
  const [tabIndex, setTabIndex] = useState(true);

  function toggleTabState(){
    setTabIndex(tabIndex => !tabIndex)
    console.log(tabIndex)
  }

  return (
    <>
<Tabs  className='container'  defaultIndex={0}>
<div className="left" >
<div className='header'>
        <h1>Hi, I'm Zineb Bendjafer</h1>
        <p>
        Junior Frontend web Developer with so much passion for learning tech and all the newest technologies, 
        always ready for a challenge and new projects, here to help and here to work. I'm currently working my way towards 
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
<TabList>
      <Tab className={tabIndex ? "active": "tab"} onClick={toggleTabState}>
        <span>01</span>
        <span className='line'></span>
        <p>PROJECTS</p>
      </Tab>
      <Tab className={tabIndex ? "tab" : "active"} onClick={toggleTabState} >
        <span>02</span>
        <span className='line'></span>
        <p>CONTACT</p>
      </Tab>
    </TabList>
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

</div>

<div className="right">
    <TabPanel>
      <Projects />
    </TabPanel>
    
    <TabPanel>
      <Contact/>
    </TabPanel>
</div>
  </Tabs>



    </>
  )
}

export default Header