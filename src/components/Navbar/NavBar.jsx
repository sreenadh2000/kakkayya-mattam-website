import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Form,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../Routing/Routes";
import { Trans, useTranslation } from "react-i18next";
import "./NavBar.scss";

function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [language, setLanguage] = useState("EN");
  const { t, i18n } = useTranslation();

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  const toggleLanguage = () => {
    i18n.changeLanguage(language === "EN" ? "te" : "en");
    setLanguage((prev) => (prev === "EN" ? "TA" : "EN"));
  };

  useEffect(() => {
    const lang = navigator.languages;
    console.log(lang.includes("te"));

    if (lang.includes("te")) {
      i18n.changeLanguage("te");
      setLanguage("TA");
      return;
    }
    i18n.changeLanguage("en");
    setLanguage("EN");
  }, [navigator.languages]);
  return (
    <>
      <Navbar expand="md" className="navbar-container py-2">
        <Container fluid className="mx-4">
          {/* Logo */}
          <Navbar.Brand className="header-title">
            {/* <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              alt="Temple Logo"
            /> */}
            <Trans i18nKey={"brandName"} />
            {/* {t("brandName")} */}
          </Navbar.Brand>
          <div className="d-flex gap-3">
            {/* Horizontal Nav (desktop only) */}
            <Nav className="ms-auto d-none d-lg-flex">
              {navRoutes.map(({ path, name }, index) => (
                <Nav.Link
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  as={NavLink}
                  to={path}
                  key={index}
                >
                  <Trans i18nKey={name} />
                  {/* {name} */}
                </Nav.Link>
              ))}
            </Nav>
            {/* 🔤 Language Toggle with Labels */}
            <div className="d-flex check-box-nav order-lg-2 align-items-center mx-1 p-2 form-lan-control border border-2 border-warning">
              <span className="me-1">En</span>
              <Form.Check
                type="switch"
                id="lang-switch"
                onChange={toggleLanguage}
                checked={language === "TA"}
                className="mb-0 form-switch"
              />
              <span className="ms-1">తె</span>
            </div>
            {/* Mobile Menu Button */}
            <div className="d-lg-none order-lg-1">
              <Button onClick={handleShow} className="menu-icon">
                ☰
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Sidebar (Offcanvas) for Mobile */}
      <Offcanvas
        show={showSidebar}
        onHide={handleClose}
        placement="start"
        className="offcanvas-container d-lg-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="nav-horizontal">
          {navRoutes.map(({ path, name }, index) => (
            <Nav className="flex-column" key={index}>
              <Nav.Link
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                as={NavLink}
                to={path}
                key={index}
                onClick={handleClose}
              >
                <Trans i18nKey={name} />
                {/* {name} */}
              </Nav.Link>
            </Nav>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
