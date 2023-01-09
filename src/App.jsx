import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Videos from "./components/Videos";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./App.css";

import Layout from "./layouts/Layout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="videos"
              element={<Videos />}
            />
            <Route
              path="about"
              element={<About />}
            />
            <Route
              path="contact"
              element={<Contact />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
