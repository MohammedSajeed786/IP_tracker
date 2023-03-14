import "./App.css";
import Header from "./components/header/Header";
import Map from "./components/map/Map";
import { useContext, useEffect, useState } from "react";
import { IpContext } from "./context/IpContextProvider";
function App() {
  const ipContext = useContext(IpContext);
  const getDefaultIp = async () => {
    let res = await fetch("https://geolocation-db.com/json/");
    let data = await res.json();
    // console.log(ipContext)
    ipContext.setIpAddress(data.IPv4);
    // setIp(data.IPv4);
  };
  useEffect(() => {
    getDefaultIp();
  }, []);
  return (
    <>
      <Header />
      <Map />
    </>
  );
}

export default App;
