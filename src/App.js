import {
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/PhotoGallery";
import DeadEnd from "./pages/DeadEnd";
import Availability from "./pages/Availability";

function App() {
  return (
    <div>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/availability" element={< Availability/>} />
          <Route path="*" element={<DeadEnd />}>
          </Route>
        </Routes> 
  </div>
  );
}

export default App;
