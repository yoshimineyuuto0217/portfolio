import "./App.css";
import MainView from "./pages/MainView";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./styles/res.min.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import template from "./particlesjs-config .json";

const App = () => {
  const params = template;
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Router>
      <main>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={params}
    />
        <div className="container">
          <div className="side">
            <SideBar />
          </div>
          <div className="inner">
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/works" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
            <div className="footer">
              <small>&copy;YOSHIMINE YUUTO</small>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
