import "../../../styles/component/landingPage/home/home.scss";
import CoupleSittingImg from "./../../../../assets/images/couple-sitting.png";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
export function Home() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="container-fluid m-0" id="home-container">
      <div className="row mx-3 align-items-md-center">
        {/* <!-- Image Column --> */}
        <div className="col-md-6 order-1 order-md-2 mt-4 mt-md-0 text-center">
          <img
            src={CoupleSittingImg}
            alt="Kakkyya Praised Image"
            className="img-fluid"
          />
        </div>

        {/* <!-- Info Column --> */}
        <div className="col-md-6 order-2 order-md-1 p-4 p-md-5 info-column">
          <h1 className="fs-1">
            <Trans i18nKey={"whoDonNotKnowKakkayya.heading"} />
          </h1>
          <p className="">
            <Trans i18nKey={"whoDonNotKnowKakkayya.smallDescription"} />
          </p>
          <button
            type="button"
            className="btn btn-light btn-lg"
            onClick={() => {
              navigate("./information");
            }}
          >
            <Trans i18nKey="whoDonNotKnowKakkayya.btnText" />{" "}
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
