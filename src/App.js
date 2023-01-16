import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Products from "./components/Products/Product";
import Team from "./components/Management/Team";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Products />
              <Team />
              <Projects />
              <Contact />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
