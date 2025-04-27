import React from "react";
import "./ListCard.css";
import { useNavigate } from "react-router-dom";

const ListCard = ({ vehical }) => {
  const navigator = useNavigate();

  const dateObj = new Date(vehical.date);
  const formattedDate = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

  const handelClick = () => {
    navigator("/detail", { state: vehical });
  };

  return (
    <>
      <div
        className="card list-card custom-card"
        onClick={handelClick}
      >
        <img
          src={`http://localhost:4000/api/v1/numberplate/getImage/${vehical.image}`}
          className="card-img-top card-image custom-card-image"
          alt="Image of the car"
        />
        <div className="card-body">
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

export default ListCard;
