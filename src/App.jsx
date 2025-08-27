import './App.css'
import Header from "./components/Header/header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import VideoBlock from "./components/VideoBlock/VideoBlock.jsx";
import Projects from "./components/Projects/Projects.jsx";
import CameraBlock from "./components/CameraBlock/CameraBlock.jsx";
import Advantages from "./components/Advantages/Advantages.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Services from "./components/Services/Services.jsx";
function App() {

  return (
    <>
        <Header/>
        <Hero/>
        <VideoBlock/>
        <Projects/>
        <CameraBlock/>
        <Advantages/>
        <ContactForm/>
        <Services/>
    </>
  )
}

export default App
