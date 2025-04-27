import React from "react";
import "./DetailPage.css";
import { useLocation } from "react-router-dom";
import NavBar from "../assets/NavBar";

const DetailPage = () => {
  const location = useLocation();
  const vehical = location.state;

  const dateObj = new Date(vehical.date);
  const formattedDate = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

  if (!vehical) {
    return;
    <>
      <NavBar />
      <p>No vehicle data available.</p>;
    </>;
  }

  return (
    <>
      <NavBar />
      <div className="detail-page">
        <div className="image-container">
          <img
            src={`http://localhost:4000/api/v1/numberplate/getImage/${vehical.image}`}
            alt="Image of the car"
            className="image"
          ></img>
        </div>
        <div className="table-body">
          <table>
            <tbody>
              <tr>
                <td className="table-data">Registration</td>
                <td className="table-data">{vehical.regNumber}</td>
              </tr>
              <tr>
                <td className="table-data">Date</td>
                <td className="table-data">{formattedDate}</td>
              </tr>
              <tr>
                <td className="table-data">Location</td>
                <td className="table-data">{vehical.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
