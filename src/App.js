import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Products from "./components/Products/Product";
import Projects from "./components/Projects/Project";

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
              <Projects />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
