import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import DesktopNav from "./components/DesktopNav";
import { useState, useEffect } from "react";

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
        <div className="container">
          <div className="left">
          <Header />
          <DesktopNav />
          </div>
          <div className="tabs">
          <Projects />
          <Contact />
          </div>
        </div>
      )
     }
    </>
  );
}

export default App;
