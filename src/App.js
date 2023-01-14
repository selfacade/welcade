import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Products from "./components/Products/Product";
import Projects from "./components/Projects/Project";

function App() {
  return (
    <>
      <Home />
      <Services />
      <Products />
      <Projects />
    </>
  );
}

export default App;
