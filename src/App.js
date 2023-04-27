import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
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
      <Navbar />
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
