import React, { useEffect } from "react";
import { assets } from "../../asset/assets";
import "./MobileApp.css";
import AppDownload from "../../components/AppDownload/AppDownload";

const MobileApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mobile-app-body">
      <center>
        <div className="mobile-text">
          <h1 className="mobile-h1">
            Mobile app is available for mobile phones
          </h1>
          <p className="mobile-p">
            We have created this app to bring our service to you very easily and
            accurately. Use it and send us your experience.
          </p>
        </div>
        <img className="mobile-bg" src={assets.mobile_bg} alt="mobile-bg" />
      </center>
      <AppDownload />
    </div>
  );
};

export default MobileApp;
