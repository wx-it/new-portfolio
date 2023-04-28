import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <main>
        <div className="container">
          <Header />
          <Services />
          <Projects />
        </div>
      </main>
      <footer>© Zineb Bendjafer. All rights reserved.</footer>
    </div>
  );
}

export default App;
