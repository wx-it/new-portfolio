import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
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
        <div>
          <Header />
          <Projects />
          <Contact />
        </div>
      )
     }
    </>
  );
}

export default App;
