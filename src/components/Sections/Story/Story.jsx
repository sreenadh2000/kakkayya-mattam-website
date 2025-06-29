import GoingToForestImg from "../../../assets/images/goingToForest.JPG";
import BehindTreeImg from "../../../assets/images/Behind-tree.png";
import MurderSceneImg from "../../../assets/images/Murder_Scene.JPG";
import RebelingBramhaImg from "../../../assets/images/Rebeling_photo.JPG";
import ShowingGodsImg from "../../../assets/images/ShowingGods.JPG";
import PraisingBramha from "../../../assets/images/Praising_Bramha.JPG";
import MarriageImg from "../../../assets/images/Marriage.JPG";
import CoupleSittingImg from "../../../assets/images/couple-sitting.png";
import { Trans, useTranslation } from "react-i18next";
export function Story(params) {
  const { t, i18n } = useTranslation();
  const contents = [
    {
      id: 1,
      image: GoingToForestImg,
      content: "history.goingForest",
    },
    {
      id: 2,
      image: BehindTreeImg,
      content: "history.hearingContext",
    },
    {
      id: 3,
      image: MurderSceneImg,
      content: "history.murderContext",
    },
    {
      id: 4,
      image: RebelingBramhaImg,
      content: "history.RebelingContext",
    },
    {
      id: 5,
      image: ShowingGodsImg,
      content: "history.showingGodsContext",
    },
    {
      id: 6,
      image: PraisingBramha,
      content: "history.praisingContext",
    },
    {
      id: 7,
      image: CoupleSittingImg,
      content: "history.coupleSittingContext"},
  ];
  return (
    <div
      className="container-fluid p-5 slide-up"
      style={{ backgroundColor: "#efe3c1" }}
      id="story-section"
    >
      {/* Heading */}
      <div className="heading-title-section mb-5">
        <h2 className="text-center">
          <Trans i18nKey={"history.title"} />
        </h2>
        <div className="underline"></div>
      </div>
      {/* Story */}
      {contents.map((section, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <div className="row align-items-center g-5 mb-5" key={section.id}>
            <div
              className={`col-md-5 ${
                isImageLeft ? "order-md-1" : "order-md-2"
              } order-1`}
            >
              <img
                src={section.image}
                alt={`Section ${section.id}`}
                className="img-fluid rounded shadow"
              />
            </div>
            <div
              className={`col-md-6 ${
                isImageLeft ? "order-md-2" : "order-md-1"
              } order-2`}
            >
              <p className="fs-6">{t(section.content)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
