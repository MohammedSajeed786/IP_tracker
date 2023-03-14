import React, { useRef, useState, useContext } from "react";
import "./Header.css";
import { IpContext } from "../../context/IpContextProvider";

export default function Header() {
  const ipContext = useContext(IpContext);

  const IPRef = useRef("");
  const [errorMessage, setErrorMessage] = useState("");
  const searchAddress = () => {
    let value = IPRef.current.value;
    let pattern =
      /^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if (!pattern.test(value)) setErrorMessage("Invalid IP Address");
    else {
      setErrorMessage("");
      ipContext.setIpAddress(value);
      // console.log(value)
    }
  };
  return (
    <div class="header-container">
      <p class="title">IP Address Tracker</p>
      <div className="search">
        <input
          type="text"
          class="ip-input"
          placeholder="Search for any IP address or domain"
          ref={IPRef}
        />

        <span
          class="go-icon"
          onClick={(e) => {
            e.preventDefault();
            searchAddress();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
          </svg>
        </span>
      </div>
      <div class="error">{errorMessage}</div>
    </div>
  );
}
