import { Trans, useTranslation } from "react-i18next";
import MarriageImg from "../../../assets/images/Marriage.JPG";
export function Information(params) {
  const { i18n } = useTranslation();
  return (
    <div
      className="container-fluid p-5 slide-up"
      style={{ backgroundColor: "#efe3c1" }}
    >
      {/* Heading */}
      <div className="heading-title-section mb-5">
        <h2 className="text-center">
          <Trans i18nKey={"kakkayyaInformation.title"} />
        </h2>
        <div className="underline"></div>
      </div>
      <div className="">
        <p>
          <Trans i18nKey={"kakkayyaInformation.description.content1"} />
        </p>
        <br />
        <p>
          <Trans i18nKey={"kakkayyaInformation.description.content2"} />
        </p>
      </div>
      <div className="w-100 w-md-75 text-center">
        <img src={MarriageImg} alt="Marriage img" className="mt-3 img-fluid" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
