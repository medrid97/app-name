import React from "react";
import trainerImg from "../assets/cs.png";
import BannerImage1 from "../assets/slider6.jpeg";
import "../styles/Detailsrpm.css";

function DetailsJack() {
  return (
    <>
      <div
        class="background-title"
        style={{ backgroundImage: "url(" + BannerImage1 + ")" }}
      >
        <h1 className="details-title">Bence Fekete</h1>
        <div className="under-title"> Fitness First / Coachs / About Bence </div>
      </div>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "60%", padding: "10px", minWidth: "200px" }}>
            <img style={{ width: "100%" }} src={trainerImg} />
            <br />
            <div>
              <span style={{ fontWeight: "bold" }}>Age: </span> 26
            </div>
          </div>
          <div style={{ padding: 10 }}>
            <h2 style={{ color: "#9b101f" }}>Bence Fekete</h2>
            <p>RPM Course Instructor</p>
            <h3 style={{ color: "#9b101f" }}>Biography</h3>
            <p>
            100 meter runner. Former hungarian racing champion
          and former member of olympic team. Certified in
               physical education
            </p>
          </div>
        </div>
        <h3 style={{ color: "#9b101f" }}>Skills:</h3>

        <p>BodyAttack</p>
        <div
          style={{
            width: "100%",
            height: "5px",
            background: "#f0f0f0",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#9b101f",
              width: "70%",
              position: "relative",
            }}
          >
            <span
              style={{
                background: "#333",
                fontSize: "11px",
                padding: " 10px 5px",
                color: "#fff",
                position: "absolute",
                top: "-38px",
                right: 0,
              }}
            >
              70%
            </span>
          </div>
        </div>

        <p>BodyPump</p>
        <div
          style={{
            width: "100%",
            height: "5px",
            background: "#f0f0f0",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#9b101f",
              width: "100%",
              position: "relative",
            }}
          >
            <span
              style={{
                background: "#333",
                fontSize: "11px",
                padding: " 10px 5px",
                color: "#fff",
                position: "absolute",
                top: "-38px",
                right: 0,
              }}
            >
              100%
            </span>
          </div>
        </div>

        <p>RPM</p>
        <div
          style={{
            width: "100%",
            height: "5px",
            background: "#f0f0f0",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#9b101f",
              width: "100%",
              position: "relative",
            }}
          >
            <span
              style={{
                background: "#333",
                fontSize: "11px",
                padding: " 10px 5px",
                color: "#fff",
                position: "absolute",
                top: "-38px",
                right: 0,
              }}
            >
              100%
            </span>
          </div>
        </div>

        <p>Circuit training</p>
        <div
          style={{
            width: "100%",
            height: "5px",
            background: "#f0f0f0",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#9b101f",
              width: "60%",
              position: "relative",
            }}
          >
            <span
              style={{
                background: "#333",
                fontSize: "11px",
                padding: " 10px 5px",
                color: "#fff",
                position: "absolute",
                top: "-38px",
                right: 0,
              }}
            >
              60%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsJack;
