import React from "react";
import { useState } from "react";
import "./App.css";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Screen3 from "./Screens/Screen3";
import Screen4 from "./Screens/Screen4";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <div>
        {page === 1 ? (
          <Screen1 />
        ) : page === 2 ? (
          <Screen2 />
        ) : page === 3 ? (
          <Screen3 />
        ) : (
          <Screen4 />
        )}
      </div>

      <Layout2 />
      <Layout1 />
      <center>
        <IconButton
          onClick={() => {
            setPage(1);
          }}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            if (page === 1) return;

            const nextPage = page - 1;
            setPage(nextPage);
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        {page} of 4
        <IconButton
          onClick={() => {
            if (page === 4) return;

            const nextPage = page + 1;
            setPage(nextPage);
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </center>
    </>
  );
}
