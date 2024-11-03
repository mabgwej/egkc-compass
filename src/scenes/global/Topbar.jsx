import { React, useContext } from "react";
import { Box, IconButton, useTheme, Grid } from "@mui/material";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box justifyContent="space-between" alignItems="center">
      <Box display="flex" justifyContent="flex-end" alignItems="flex-end" >
        <Grid container direction="column" alignItems="flex-end">
          <Grid item xs={3} color="white">
            <IconButton onClick={colorMode.toggleColorMode} >
              {theme.palette.mode === "light" ? (
                <DarkModeOutlinedIcon sx={{ color: 'white' }}/>
              ) : (
                <LightModeOutlinedIcon  sx={{ color: 'white' }}/>
              )}
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
 
export default Topbar;
