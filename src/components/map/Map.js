import { Icon } from "leaflet";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./Map.css";
import logo from "./icon-location.svg";
import { IpContext } from "../../context/IpContextProvider";
import Details from "../details/Details";
// import * as dotenv from 'dotenv'
// dotenv.config()
export default function Map() {
  // 51.505, -0.09 17.7,83.225
  const [position, setPosition] = useState([51.505, -0.09]);
  const icon = new Icon({
    iconUrl: logo,
  });
  const ipContext = useContext(IpContext);
  const ip = ipContext.ip;
  const [details, setDetails] = useState({
    ip: "",
    location: "",
    timezone: "",
    isp: "",
  });
  const getPosition = async () => {
    let res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`
      // `https://geo.ipify.org/api/v2/country,city?apiKey=at_5O98a2xaFJWcLUqkOCEDFfAdg1rXO&ipAddress=${ip}`
    );
    let data = await res.json();
    // console.log(data)
    // console.log(data.location.lat,data.location.lng)
    setPosition([data.location.lat, data.location.lng]);
    setDetails({
      ip: data.ip,
      location: `${data.location.city}, ${data.location.region}, ${data.location.country} ${data.location.postalCode}`,
      timezone: data.location.timezone,
      isp: data.isp,
    });
  };
  useEffect(() => {
    // console.log(process.env.REACT_APP_API_KEY)
    getPosition();
  }, [ip]);
  return (
    <>
      {/* <img src={logo}  alt="" /> */}
      {/* <Details details={details}></Details> */}
      <div class="map">
        <Details details={details}></Details>

        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          key={position}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=c96042ac77dd478394a1f4710a9a258e"
          />
          <Marker position={position} icon={icon}>
            <Popup>You are here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
