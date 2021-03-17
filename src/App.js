// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Project from './components/Project';
import Experience from './components/Experience';

function App() {
  return (
    <>
    <Particles
    className = "particles-canvas"
    params = {{
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 900
        }
      },
      shape: {
        type: "circle",
        stroke:{
          width: 10,
          color: "#fff"
        }
      }
    }}
    
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Project/>
    <Experience/>
    </>
  );
}

export default App;
