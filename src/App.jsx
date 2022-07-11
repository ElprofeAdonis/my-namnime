import React, { useState } from "react";
import "./assets/css/App.css";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Header from "./Header";
import MyList from "./myList";

import MyRandon from "./myRandon";
import ButtonGetRandon from "./ButtonGetRandon";
import Fooder from "./Fooder";

const App = () => {
  const [infoApi, setInfoApi] = useState("");
  const [infoImagen, setInfoImagen] = useState("");
  const [infoId, setInfoId] = useState("");
  const [infoConnect, setinfoConnect] = useState("");
  const [infoWork, setinfoWork] = useState("");
  const [infoBiography, setInfobiography] = useState("");
  const [infoAppearance, setinfoAppearance] = useState("");
  const [infoBiographyy, setinfoBiographyy] = useState("");
  const [infoAppearancee, setinfoAppearancee] = useState("");
  const [infoWorkk, setinfoWorkk] = useState("");

  const SearchData = async () => {
    try {
      var NunRandon = parseInt(Math.random() * (732 - 1 + 1)) + 1;
      console.log(NunRandon);

      const result = await axios.get(
        `https://superheroapi.com/api.php/338148107599656/${NunRandon}`
      );

      setInfoApi(result.data.name);
      setInfoImagen(result.data.image);
      setInfoId(result.data.id);
      setinfoConnect(result.data.connections);
      setinfoWork(result.data.work);
      setInfobiography(result.data.biography);
      setinfoAppearance(result.data.appearance);
      setinfoBiographyy(result.data.biography);
      setinfoAppearancee(result.data.appearance);
      setinfoWorkk(result.data.work);
    } catch (error) {
      console.error(
        "Hola Adonis la verda no funciono animo resuelve el problema " + error
      );
    }
  };
  const AnimeInfo = [
    infoApi,
    infoImagen,
    infoId,
    infoConnect,
    infoWork,
    infoBiography,
    infoAppearance,
    infoBiographyy,
    infoAppearancee,
    infoWorkk,
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <MyList />
        <div className="anime-info">
          <Box
            sx={{
              textAlign: "right",
              padding: "16px",
            }}
          >
            <Button variant="contained" onClick={SearchData}>
              GET NEW RANDOM ANIME
            </Button>
          </Box>
          <h2 className="animee">Random Anime</h2>
          <MyRandon apiData={AnimeInfo} />
        </div>
      </main>
      <ButtonGetRandon />

      <Fooder />
    </div>
  );
};
export default App;
