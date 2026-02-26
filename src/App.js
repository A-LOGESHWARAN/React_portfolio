import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Statistics } from "./components/Statistics";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Resume } from "./components/Resume";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Publications />
      <Statistics />
      <Contact />
      <Resume />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
