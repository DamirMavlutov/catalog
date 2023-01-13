import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import VideosPage from "./components/VideosPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";
import "./App.css";

import Layout from "./layouts/Layout";
import DetailPage from "./components/DetailPage";

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
              element={<HomePage />}
            />
            <Route
              path="videos"
              element={<VideosPage />}
            />
            <Route
              path="about"
              element={<AboutPage />}
            />
            <Route
              path="contact"
              element={<ContactPage />}
            />
            <Route
              path="detail/:id"
              element={<DetailPage />}
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
