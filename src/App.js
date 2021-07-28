import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import RegistrationComponent from "./Components/RegistrationComponent";
import style from "./styles.module.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <RegistrationComponent />
    </div>
  );
}

export default App;
