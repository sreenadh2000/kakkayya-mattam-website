import "../../../styles/component/landingPage/history/history.scss";
import HistoryRefImage from "../../../../assets/images/history-representation.png";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
export function History() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <div className="container p-5" id="history-container">
      <div className="heading-container my-4">
        <h2 className="text-center">
          <Trans i18nKey={"history.mainHeading"} />
        </h2>
        <div className="underline"></div>
      </div>
      <div className="row align-items-center">
        {/* <!-- Image Column --> */}
        <div className="col-md-6 order-1 mb-3 mb-md-0 image-column text-center">
          <img
            src={HistoryRefImage}
            alt="history representation"
            className="img-fluid"
          />
        </div>
        {/* <!-- Info Column --> */}
        <div className="col-md-6 order-2 p-3 p-md-5 info-column">
          <p>
            <Trans i18nKey={"history.mainContent"} />
          </p>
          <button
            type="button"
            className="btn btn-light btn-lg"
            onClick={() => {
              navigate("./story");
            }}
          >
            <Trans i18nKey={"history.btnText"} /> <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
