import React, { useEffect, useState } from "react";
import ListCard from "../assets/ListCard";
import "./Home.css";
import axios from "axios";
import NavBar from "../assets/NavBar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicalData, setVehicalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/numberplate/getAll"
        );

        if (response.data.success) {
          setVehicalData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <NavBar />
        <div id="card-container">
          <p>Loading...</p>
        </div>
      </>
    );
  } else if (vehicalData.length === 0) {
    return (
      <>
        <NavBar />
        <div id="card-container">
          <p>No Data found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div id="card-container">
        {vehicalData.map((item) => (
          <ListCard key={item._id} vehical={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
