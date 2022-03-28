import "./App.css";
import Header from "./components/Header.js";
import Section from "./components/elements/Section.js";
import Destinations from "./components/Destinations.js";
import Footer from "./components/elements/Footer.js";
import Informations from "./components/elements/Informations.js";

function App() {
  return (
    <div className="md:w-full">
      <Header />
      <Section />
      <Destinations />
      <Informations />
      <Footer />
    </div>
  );
}

export default App;
