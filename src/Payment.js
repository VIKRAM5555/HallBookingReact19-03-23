import React from "react";
import { useState, useContext, createContext } from "react";
import { locateContext } from "./App";
import { useParams } from "react-router-dom";
export function Payment() {
  const { locate, room, hallList, Difference_In_Days } =
    useContext(locateContext);
  const { id } = useParams();
  let currency =
    hallList.find((a) => a.id === id).Price * room.length * Difference_In_Days;
  currency = currency.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="Rooms_Guest">
      <h1 style={{ letterSpacing: "5px" }}>Booked Successfully</h1>
      <h2 style={{ letterSpacing: "5px" }}>Location :{locate}</h2>
      <h3 style={{ letterSpacing: "3px" }}>
        Number of Room Booked : {room.length}
      </h3>
      <h3 style={{ letterSpacing: "3px" }}>
        Number of Days : {Difference_In_Days}
      </h3>
      <h4 style={{ letterSpacing: "3px" }}>
        Price :{`$${hallList.find((a) => a.id === id).Price}/day`}
      </h4>
      <h1 style={{ letterSpacing: "3px" }}>Total Fare :{currency}</h1>
      <h4 style={{ letterSpacing: "3px" }}>Thank you</h4>
    </div>
  );
}
