import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Program } from "./components/Program/Program";
import { Reason } from "./components/Reason/Reason";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
    </div>
  );
}

export default App;
