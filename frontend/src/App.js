import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./Layouts/TopBar";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Feature from "./Components/Feature";
import Index from "./Components/Index";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Service from "./Components/Service";
import Task from "./Components/Task";
import Team from "./Components/Team";
import Attendance from "./Components/Attendance"; 

import "./Assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./Assets/lib/animate/animate.min.css";
import "./Assets/css/bootstrap.min.css";
import "./Assets/css/style.css";


function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/feature" exact element={<Feature />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/service" exact element={<Service />} />
          <Route path="/task" exact element={<Task />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/attendance" exact element={<Attendance />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
