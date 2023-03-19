import "./App.css";
import { FirstPage } from "./FirstPage";
import React, { useEffect, useRef } from "react";
import { Route, Routes, BrowserRouter, json } from "react-router-dom";
import { ListRoom } from "./ListRoom";
import { ListRoomIsolate } from "./ListRoomIsolate";
import { Payment } from "./Payment";
import { useState, createContext } from "react";
import GetStarted from "./getStarted";
import { StartPage } from "./StartPage";
import PaymentForm from "./brainTreePayment";
import { CardActions } from "@mui/material";
import { Signin } from "./Signin";
import SignupPage from "./Signup";
import { Welcome } from "./Welcome";

export const locateContext = createContext();

export default function App() {
  const [firstDate, setFirstDate] = useState("");
  const [SecondDate, setSecondDate] = useState("");
  const [songInfo, setsongInfo] = useState([]);
  const [UsernameData, setUsernameData] = useState("No User");
  const [searchData, setSearchData] = useState("");

  const [userDataFromDB, setUserDataFromDB] = useState({});

  var date1 = new Date(firstDate);
  var date2 = new Date(SecondDate);

  var Difference_In_Time = date2.getTime() - date1.getTime();

  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const [locate, setLocate] = useState("");
  const [room, setRoom] = useState([1]);
  const [hallList, setHallList] = useState([]);
  const PreventRender = useRef(true);

  useEffect(() => {
    let req = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ searchTrack: searchData }),
    };

    fetch(`https://spotify-serverfinal.onrender.com/search/track`, req)
      .then((response) => response.json())
      .then((data) => setsongInfo([...data]));
  }, [searchData]);

  useEffect(() => {
    if (PreventRender.current === true) {
      fetch("http://localhost:4000/hallBooking")
        .then((a) => a.json())
        .then((a) => setHallList([...a]))
        .catch(function (error) {
          console.log("Request failed", error);
        });
      PreventRender.current = false;
    }
  }, []);

  return (
    <BrowserRouter>
      <locateContext.Provider
        value={{
          locate: locate,
          setLocate: setLocate,
          room: room,
          setRoom: setRoom,
          hallList: hallList,
          firstDate: firstDate,
          setFirstDate: setFirstDate,
          SecondDate: SecondDate,
          setSecondDate: setSecondDate,
          date1: date1,
          date2: date2,
          Difference_In_Time: Difference_In_Time,
          Difference_In_Days: Difference_In_Days,
          UsernameData: UsernameData,
          searchData,

          setSearchData,
          setUserDataFromDB,
          userDataFromDB,

          setUsernameData: setUsernameData,
        }}
      >
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/StartPage" element={<StartPage />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/listRoom" element={<ListRoom hallList={hallList} />} />
          <Route
            path="/listRoom/:id"
            element={<ListRoomIsolate hallList={hallList} />}
          />
          <Route path="/listRoom/:id/payment" element={<PaymentForm />} />
          <Route path="/listRoom/:id/receipt" element={<Payment />} />
        </Routes>
      </locateContext.Provider>
    </BrowserRouter>
  );
}
