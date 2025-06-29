import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./components/styles/component/main.scss";
import { Suspense } from "react";
import routes from "./components/Routing/Routes";
import NavBar from "./components/Navbar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter basename="kakkayya-mattam-website">
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
    </BrowserRouter>
  );
}

export default App;
