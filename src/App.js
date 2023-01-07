import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
     {
      loading ? (
        <Loader/>
      ) : (
          <div>
            <Header />
          <div className="mobile">
            <Projects />
            <Contact />
          </div>
          <p className="copyright">
          Copyright ©2023 All rights reserved | Created by Zineb.B
          </p>
          </div>
      )
     }
    </>
  );
}

export default App;
