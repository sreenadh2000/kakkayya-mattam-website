import ManagerImg from "./../../../assets/images/manager-photo.jpg";
import OwnerImg from "./../../../assets/images/owner.jpg";
import { Trans, useTranslation } from "react-i18next";
export function About() {
  const { i18n } = useTranslation();
  return (
    <div className="slide-up mx-5" id="about-section">
      <div className="--header">
        {/* Heading */}
        <div className="heading-title-section text-center my-4">
          <h2 className="text-align-center">
            <Trans i18nKey={"honouringKakkayya.heading"} />
          </h2>
          <div className="underline" style={{ width: "20%" }}></div>
        </div>
        <p className="">
          <Trans
            i18nKey="honouringKakkayya.description.para1"
            components={[
              <strong key="1" />,
              <strong key="2" />,
              <strong key="3" />,
              <strong key="4" />,
              <strong key="5" />,
            ]}
          />
        </p>
        <br />
        <p className="">
          <Trans
            i18nKey="honouringKakkayya.description.para2"
            components={[<strong key="1" />, <strong key="2" />]}
          />
        </p>
      </div>
      <div className="--founder container-fluid">
        <div className="row justify-content-center my-5">
          <div
            className="col-12 col-md-5 card text-center col-with-modal"
            style={{ backgroundColor: "#ffc264" }}
          >
            <img src={OwnerImg} alt="founder img" className="mt-3 img-fluid" />
            <div className="card-body text-center">
              <h5 className="card-title">
                <Trans i18nKey="honouringKakkayya.founder.title" /> <br />{" "}
                <Trans i18nKey="honouringKakkayya.founder.dob" /> <br />{" "}
                <Trans i18nKey="honouringKakkayya.founder.name" />
              </h5>
              <p className="card-text">
                <Trans i18nKey="honouringKakkayya.founder.description" />
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-5 text-center py-auto mx-3 fs-5"
            style={{ backgroundColor: "#efe3c1" }}
          >
            <h3 className="my-5">
              {" "}
              <Trans i18nKey="honouringKakkayya.founder.quatation.title" />
            </h3>
            <p className="fs-4">
              <Trans i18nKey="honouringKakkayya.founder.quatation.description" />
            </p>
          </div>
        </div>
      </div>{" "}
      <hr />
      <p className="text-center">...</p>
      <hr />
      <div className="--manager container-fluid">
        <div className="row h-100 justify-content-center my-5">
          <div
            className="col-12 col-md-5 card text-center col-with-modal"
            style={{ backgroundColor: "#ffc264" }}
          >
            <img
              src={ManagerImg}
              alt="manager img img-fluid"
              className="mt-3"
            />
            <div className="card-body text-center">
              <h5 className="card-title">
                <Trans i18nKey="honouringKakkayya.manager.title" /> <br />{" "}
                <Trans i18nKey="honouringKakkayya.manager.dob" /> <br />{" "}
                <Trans i18nKey="honouringKakkayya.manager.name" />
              </h5>
              <p className="card-text">
                <Trans i18nKey="honouringKakkayya.manager.description" />
              </p>
            </div>
          </div>
          <div
            className="col-12 col-md-5 text-center py-auto mx-3 fs-5"
            style={{ backgroundColor: "#efe3c1" }}
          >
            <h4 className="my-5">
              {" "}
              <Trans i18nKey="honouringKakkayya.manager.quatation.title" />
            </h4>
            <p className="fs-4">
              <Trans i18nKey="honouringKakkayya.manager.quatation.description" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
