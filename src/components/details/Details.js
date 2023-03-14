import React from "react";
import "./Details.css"
export default function Details({details}) {
  return (
    // <div className="details-container"> 
    <div class="details">
      <div class="detail-item">
        <span class="detail-title">IP Address</span>
        <span className="value">{details.ip}</span>
      </div>
      <div class="detail-item">
        <span class="detail-title">Location</span>
        <span className="value">{details.location}</span>
      </div>
      <div class="detail-item">
        <span class="detail-title">Timezone</span>
        <span className="value">UTC {details.timezone}</span>
      </div>
      <div class="detail-item">
        <span class="detail-title">ISP</span>
        <span className="value">{details.isp}</span>
      </div>
    </div>
    // </div>
  );
}
