import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Program } from "./components/Program/Program";
import { Reason } from "./components/Reason/Reason";
import { Plans } from "./components/Plans/Plans";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Join } from "./components/Join/Join";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer/>
    </div>
  );
}

export default App;
