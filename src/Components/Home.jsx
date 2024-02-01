import React from "react";
import "./home.css";

import AccessibilityIcon from "@mui/icons-material/Accessibility";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import RowingIcon from "@mui/icons-material/Rowing";

function Home() {
  return (
    <div className="main-home-div">
      <div className="top-section">
        {/* give this div a class , and make  its display property as  flex */}
        <div className="top-left">
          <h2>Yoga for mind</h2>
          <span>
            watch our lead yoga therapist,<u>Ms Uma Subramaniyam </u> expalin
            Yoga for mind
          </span>
        </div>
        <div className="top-right">
          {/* video */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hJbRpHZr_d0?si=CY1nrux3uJEwB5ZT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <span className="mid-text">is this for you</span>
      <div className="second-section">
        {/* give this div a class , and make  its display property as  flex */}
        <div className="second-item">
          <div className="image-circle">
            <AccessibilityIcon fontSize="large" />
          </div>
          <p className="image-text">
            hard to feel calm or sleep because of stress
          </p>
          {/* study diff between div, span , paragraph tag */}
          <a href="/product">
            <button>Book trial</button>
          </a>
        </div>
        <div className="second-item">
          <div className="image-circle">
            <MonitorHeartIcon fontSize="large" />
          </div>
          <p className="image-text">
            If you have palpatations and breathing troubles
          </p>
          {/* study diff between div, span , paragraph tag */}
          <a href="/product">
            <button>Book trial</button>
          </a>
        </div>
        <div className="second-item">
          <div className="image-circle">
            <RowingIcon fontSize="large" />
          </div>
          <p className="image-text">
            You have been advised by doctors to avoid physical activity
          </p>
          {/* study diff between div, span , paragraph tag */}
          <a href="/product">
            <button>Book trial</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
