import { React, useState } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import Cards from "./components/Cards";
import TopCards from "./components/TopCards";
import Topbar from "../global/Topbar";
import "./styles.css";
import { tokens } from "../../theme";

import Albertsons from "../../Assets/albertsons.png";
import axios from "axios";

const Bookmarks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [banner, setBanner] = useState(null);
  const [compass, setcompass] = useState(null);

  const fetchData = async () => {
    try {
      const responseCompass = await axios.get("./svg/compass.svg", {
        "Content-Type": "application/xml; charset=utf-8",
      });
      setcompass(responseCompass.data);

      const responseBanner = await axios.get("./svg/banner.svg", {
        "Content-Type": "application/xml; charset=utf-8",
      });
      setBanner(responseBanner.data);

  
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  fetchData();
  const svgDataUriCompass = "data:image/svg+xml;base64," + btoa(compass);
  const svgDataUriBanner = "data:image/svg+xml;base64," + btoa(banner);


  return (
    <Box
    sx={{
      }}>
      <Box
        sx={{
          backgroundImage: `url(${svgDataUriBanner})`,
    backgroundRepeat: 'repeat-y', 
    backgroundSize: 'cover', 
    backgroundPosition: 'top', 
    width: '100%', // Set the width of the box
  
    opacity: 0.8,
    zIndex: -1,
      
         
        }}
      >
        <Box display="flex" justifyContent="space-between" >
          <Box   color="white">
            <Typography
              variant="h2"
              fontWeight="bold"
              fontFamily={"Helvetica"}
              color="#00B0F0"
              sx={{ m: "10px 0px 0px 30px" }}
            >
              COG
            </Typography>
            <Typography
              variant="h1"
              fontWeight="bold"
              fontFamily={"Helvetica"}
              fontcolor="#3E74AB"
              sx={{ m: "0px 0px 0px 90px" }}
            >
              C
              <img
                src={`${svgDataUriCompass}`}
                alt="a"
                style={{
                  verticalAlign: "top",
                  height: "1.5em",
                  margin: "-5px",
                }}
              ></img>
              mp
              <img
                src={Albertsons}
                alt="a"
                style={{
                  verticalAlign: "middle",

                  margin: "-12px",
                }}
              />
              ss
            </Typography>
          </Box>

          <Topbar />
        </Box>
        <hr color={colors.greenAccent[400]} />
        {/* Top Bar Cards */}
        <TopCards margintop="-10px" />
      </Box>

  
      <Box
  
        display="grid"
        gridTemplateColumns="repeat(16, 1fr)"
        gridAutoRows="minmax(100px, auto)"
        gap="20px"
        
      >
        <Cards />
      </Box>
    
    </Box>
  );
};

export default Bookmarks;
