import "./Footer.scss";
import { Trans, useTranslation } from "react-i18next";

export function Footer() {
  const { i18n } = useTranslation();
  return (
    <footer>
      <div className="container my-4">
        <div className="row align-items-center mx-4">
          <div className="col">
            <h5>Address :</h5>
            <p>
              Sri Kakkatta Swami Mattam, Kandimallayapalli
              <br />
              B. Mattam, Kadapa (Dist), Andhra Pradesh.
            </p>
            <p>Phone: 9440653107</p>
            <p>Email: sree@gmail.com</p>
          </div>
          <div className="col footer-related-links">
            <h5>Quick Links :</h5>
            <ul>
              <li>
                <a href="/">
                  <Trans i18nKey={"nav.home"} />
                </a>
              </li>
              <li>
                <a href="/about">
                  <Trans i18nKey={"nav.about"} />
                </a>
              </li>
              <li>
                <a href="/contact">
                  <Trans i18nKey={"nav.contact"} />
                </a>
              </li>
              <li>
                <a href="/donation">
                  <Trans i18nKey={"nav.donation"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container text-center mt-2">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} YourCompanyName. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
