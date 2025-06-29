import "../../../styles/component/landingPage/address/address.scss";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleMap,
  DirectionsRenderer,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useTranslation, Trans } from "react-i18next";

const libraries = ["marker", "places"];
const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
const mapsId = import.meta.env.VITE_APP_GOOGLE_MAPS_ID;

export function Address() {
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [infoPosition, setInfoPosition] = useState(null);
  const [infoContent, setInfoContent] = useState("");
  const mapRef = useRef(null);
  const markerRef = useRef(null); // advanced marker ref

  const { i18n } = useTranslation();
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const kakkyyMatamLocation = {
    lat: 14.8213009,
    lng: 78.8820914,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey, // replace with your API key
    libraries,
  });

  // Set AdvancedMarker on load
  const onMapLoad = (map) => {
    mapRef.current = map;

    // ✅ Use AdvancedMarkerElement (after map + library load)
    if (
      window.google?.maps?.marker?.AdvancedMarkerElement &&
      !markerRef.current
    ) {
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: kakkyyMatamLocation,
        title: "Sri Kakkayya Mattam",
      });
    }
  };

  const handleGetDirections = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const destination = kakkyyMatamLocation;
        setUserLocation(origin);

        const directionsService = new window.google.maps.DirectionsService();

        directionsService.route(
          {
            origin,
            destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === "OK") {
              setDirections(result);

              const leg = result.routes[0].legs[0];
              setInfoContent(
                `🛣 Distance: ${leg.distance.text} | 🕒 Time: ${leg.duration.text}`
              );
              setInfoPosition(
                leg.steps[Math.floor(leg.steps.length / 2)].end_location
              ); // midpoint
            } else {
              alert("Could not fetch directions: " + status);
            }
          }
        );
      },
      () => alert("Location access denied.")
    );
  };

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div id="address-container">
      <div className="heading-section my-5">
        <h2 className="text-center">
          <Trans i18nKey={"visitUS.title"} />
        </h2>
        <div className="underline"></div>
      </div>

      <div className="container address-body-section">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-6 text-center">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={kakkyyMatamLocation}
              zoom={14}
              onLoad={onMapLoad}
              options={{
                mapId: mapsId,
                disableDefaultUI: true,
                zoomControl: true,
              }}
            >
              {directions && <DirectionsRenderer directions={directions} />}
              {infoPosition && (
                <InfoWindow position={infoPosition}>
                  <div>{infoContent}</div>
                </InfoWindow>
              )}
            </GoogleMap>

            <div className="mt-5 text-center">
              <button
                className="direction-btn fs-4"
                onClick={handleGetDirections}
              >
                <Trans i18nKey={"visitUS.directionText"} />
              </button>
              {directions && (
                <div className="mt-3">
                  <strong>Distance:</strong>{" "}
                  {directions.routes[0].legs[0].distance.text}
                  <br />
                  <strong>Duration:</strong>{" "}
                  {directions.routes[0].legs[0].duration.text}
                </div>
              )}
            </div>
          </div>

          <div className="col-12 col-md-6 m-5 m-md-0 ps-5">
            <h4>
              <strong>Address:</strong> Sri Kakkatta Swami Mattam,
              Kandimallayapalli B. Mattam, Kadapa (Dist), Andhra Pradesh.
            </h4>
            <h4>
              <strong>Phone:</strong> +91 9440653107
            </h4>
            <h4>
              <strong>Email:</strong> Sreenadh056@gmail.com
            </h4>
            <div className="my-5">
              <button className="mx-2 btn">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ fontSize: "4rem", color: "#d84315" }}
                />
              </button>
              <button className="mx-2 btn">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "4rem", color: "#d84315" }}
                />
              </button>
              <button className="mx-2 btn">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ fontSize: "4rem", color: "#d84315" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
