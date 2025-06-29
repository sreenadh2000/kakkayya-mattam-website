import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/styles/component/main.scss";
import { Suspense } from "react";
import routes from "./components/Routing/Routes";
import NavBar from "./components/Navbar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Trans, useTranslation } from "react-i18next";
// APIKEY = AIzaSyD91apDWH2wUHwN4QFTeCEBDq5ECB2-OGU
function App() {
  const { i18n } = useTranslation();
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100" id="app-section">
        <NavBar />
        <main className="flex-grow-1">
          <Suspense
            fallback={<div className="text-center mt-5">Loading...</div>}
          >
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer /> {/* Always sticks at bottom */}
        <a href="/donation" type="button" className="sticky-right-btn">
          <Trans i18nKey={"fixedBtn"} /> <span>&rarr;</span>
        </a>
      </div>
    </Router>
  );
}

export default App;
