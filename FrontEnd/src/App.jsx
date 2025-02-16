import React from "react";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import QualityService from "./Components/Quality/QualityService";
import ExperienceEducation from "./Components/Experience/Experience&Education";
import Skills from "./Components/Skills/Skills";
import ClientStories from "./Components/Clients/Client";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Project";
import Teams from "./Components/MeetMyTeam/MeetMyTeam"
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <QualityService />
      <ExperienceEducation />
      <Skills />
      <Projects />
      <ClientStories />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
