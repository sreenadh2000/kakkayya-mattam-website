import "../../../styles/component/landingPage/events/events.scss";
import PujaImg from "../../../../assets/images/Thomb_puja.jpg";
import AradhanaImg from "../../../../assets/images/Aradhana.jpg";
import AnnadhanaImg from "../../../../assets/images/Annadhana.jpg";
import AllSwamiesImg from "../../../../assets/images/All_swamies.jpg";
import { useTranslation } from "react-i18next";
export function Events() {
  const { t } = useTranslation();
  const eventsData = [
    {
      id: 1,
      heading: "events.content1.title",
      image: AradhanaImg,
      content: "events.content1.description",
    },
    {
      id: 2,
      heading: "events.content2.title",
      image: PujaImg,
      content: "events.content2.description",
    },
    {
      id: 3,
      heading: "events.content3.title",
      image: AnnadhanaImg,
      content: "events.content1.description",
    },
    {
      id: 4,
      heading: "events.content4.title",
      image: AllSwamiesImg,
      content: "events.content1.description",
    },
  ];

  return (
    <div className="py-4 px-5" id="events-section">
      {/* Heading */}
      <div className="heading-section">
        <h2 className="text-center">{t("events.title")}</h2>
        <div className="underline"></div>
      </div>
      {/* Body */}
      <div className="events-body-section container my-4 my-md-5">
        <div className="row">
          {eventsData.map((event) => (
            <div className="col-12 col-md-4 col-lg-3 mb-3" key={event.id}>
              <div className="card w-100">
                <img
                  src={event.image}
                  className="card-img-top img-fluid"
                  alt={`event-${event.id}`}
                />
                <div className="card-body">
                  <h5>
                    <u>{t(event.heading)} :</u>
                  </h5>
                  <p className="card-text">{t(event.content)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
