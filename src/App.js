import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
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
    </div>
  );
}

export default App;
