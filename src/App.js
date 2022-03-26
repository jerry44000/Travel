import "./App.css";
import Header from "./components/Header.js";
import Section from "./components/assets/Section.js";
import Pricing from "./components/Pricing.js";

function App() {
  return (
    <div className="md:w-full">
      <Header />
      <Section />
      <Pricing />
    </div>
  );
}

export default App;
