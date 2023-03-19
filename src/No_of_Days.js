import { Button } from "@mui/material/";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, createContext } from "react";
import { locateContext } from "./App";
import { Corosell } from "./Corosell";
export function No_of_Days() {
  const {
    firstDate,
    setFirstDate,
    SecondDate,
    setSecondDate,
    date1,
    date2,
    Difference_In_Time,
    Difference_In_Days,
  } = useContext(locateContext);
  const navigate = useNavigate();
  const { locate, room } = useContext(locateContext);
  return (
    <div
      style={{
        width: "40%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        left: "25%",
        top: "28%",
      }}
    >
      <div
        className="Rooms_Guest"
        style={{ width: "100%", height: "100%", marginTop: "20px" }}
      >
        <h3
          style={{
            letterSpacing: 2,
            wordSpacing: 8,
            height: "30px",
          }}
        >
          CHECK In & Out
        </h3>

        <input
          style={{ padding: 8, borderRadius: 12, border: "error" }}
          type="date"
          onChange={(e) => setFirstDate(e.target.value)}
          id="birthday"
          name="birthday"
        />
        <input
          style={{ padding: 8, borderRadius: 12, border: "error" }}
          type="date"
          onChange={(e) => setSecondDate(e.target.value)}
          id="birthday"
          name="birthday"
        />
        <span>
          {Difference_In_Days > -1 ? (
            <Button variant="contained" color="error">
              No of Days : {Difference_In_Days}
            </Button>
          ) : null}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "60px",
          marginRight: "-150px",
        }}
      >
        <Button
          onClick={() => navigate("/listRoom", { replace: true })}
          variant="contained"
          color="error"
          disabled={isNaN(Difference_In_Days) || locate === ""}
        >
          Search
        </Button>
        {console.log(Difference_In_Days, locate, room)}
      </div>
      <Corosell />
    </div>
  );
}
