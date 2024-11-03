import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { tokens } from "../../../../theme";
import "./styles.css";
import ReplayIcon from "@mui/icons-material/Replay";
import Xarrow from "react-xarrows";

// Data
import Items from "../../data/items.json";

const Cards = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [cardListStack, setCardStack] = useState([]);

  const data = Items;
  const gridRowLength = data.length / 2;

  const handleCardClick = (key, URL) => {
    if (URL && typeof window !== "undefined") {
      window.open(URL, "Loading...");
    } else {
      setCardStack([...cardListStack, key]);
    }
  };

  const handleBack = () => {
    cardListStack.length === 0
      ? setCardStack([])
      : setCardStack(cardListStack.slice(0, -1));
  };

  const findSelectedCard = (data, keys) => {
    if (keys.length === 0) return data;
    const key = keys[0];
    const item = data.find((item) => item.key === key);
    if (item) {
      if (keys.length === 1) return item;
      const subCategories =
        item.itemListOne ||
        item.itemListTwo ||
        item.itemListThree ||
        item.itemListFour;
      if (subCategories) {
        return findSelectedCard(subCategories, keys.slice(1));
      } else {
        return [];
      }
    }
    return null;
  };

  const selectedCard = findSelectedCard(data, cardListStack);

  const cardData = selectedCard
    ? selectedCard.itemListOne ||
      selectedCard.itemListTwo ||
      selectedCard.itemListThree ||
      selectedCard.itemListFour
    : [];

  return (
    <Box
      gridColumn="span 20"
      gridRow={`span ${String(gridRowLength)}`}
   
    >
      <Box gridColumn="span 8" className="box-3">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {cardListStack.length === 0 ? (
              <Box
                gridColumn="span 8"
                style={{
                  display: "grid",
                }}
                id="grid1"
              >
                <Grid container spacing={2}>
                  {data.map((item, index) => (
                    <Grid item xs={12} sm={10} md={6} lg={4} xl={3} key={index}>
                      <div
                        href={item?.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card
                          className="card-main 1"
                          sx={{
                            marginBottom: "20px",
                            height: 240,
                            borderRadius: "16px",
                            boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.5)",
                          }}
                          onClick={() => handleCardClick(item.key, item?.URL)}
                        >
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              align="center"
                              fontWeight={"bold"}
                              className="image-text"
                            >
                              {item.icon && (
                                <img
                                  src={`compass/icons-images/${item?.icon}`}
                                  width="20px"
                                  alt=""
                                  marginleft="10px"
                                />
                              )}
                              {item.name}
                            </Typography>
                            {item.name2 && (
                              <Typography
                                variant="h5"
                                component="div"
                                align="center"
                                fontWeight={"bold"}
                                className="image-text"
                              >
                                {item.name2}
                              </Typography>
                            )}
                            <hr />
                            <Typography variant="body2">
                              {item.toolTip}
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ) : null}

            {cardListStack.length > 0 ? (
              <Box display="flex" flexDirection="column">
                <Card
                  id={`main${String(selectedCard.key)}`}
                  className="card-main 2"
                  key={selectedCard.key}
                  sx={{
                    minWidth: 275,
                    marginBottom: "20px",
                    width: "30%",
                    borderRadius: "16px",
                    boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      align="center"
                      fontWeight={"bold"}
                      className="image-text"
                    >
                      {selectedCard.icon && (
                        <img
                          src={`compass/icons-images/${selectedCard?.icon}`}
                          width="20px"
                          alt=""
                          marginleft="10px"
                        />
                      )}
                      {selectedCard.name}
                    </Typography>

                    <hr />
                    <Typography variant="body2">
                      {selectedCard.toolTip}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ) : null}
            {/* Back Code */}
            {cardListStack.length > 0 && (
              <Card
                className="card-main 3"
                key={selectedCard.key}
                sx={{
                  minWidth: 275,
                  marginBottom: "20px",
                  width: "30%",
                  borderRadius: "16px",
                  boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.5)",
                }}
                onClick={() => handleBack()}
              >
                <CardContent>
                  <Typography variant="h3" component="div" align="center">
                    <ReplayIcon /> Back
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
          <Grid item xs={1}>
            {cardListStack != null && (
              <Box
                height="auto"
                m="20px 0 0 10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                className="xarrow-main"
                gridColumn="span 12"
              >
                {/* <Grid xs={4} sm={2} md={12} lg={5} xl={4}> */}
                {cardData && cardData.length > 0
                  ? cardData.map((subItem) => (
                      <Xarrow
                        start={`main${String(selectedCard.key)}`}
                        end={`subCat${String(subItem.key)}`}
                        color={colors.greenAccent[400]}
                        strokeWidth={2}
                      />
                    ))
                  : null}
                {/* </Grid> */}
              </Box>
            )}
          </Grid>
          <Grid item xs={3}>
            <Box pl={2}>
              {cardData && cardData.length > 0 ? (
                cardData.map((subItem) => (
                  <div
                    key={subItem.key}
                    id={`subCat${String(subItem.key)}`}
                    onClick={() => handleCardClick(subItem.key, subItem?.URL)}
                    style={{ cursor: "pointer" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card
                      className="card-main 4"
                      sx={{
                        minWidth: 275,
                        marginBottom: "20px",
                        width: "50%",
                        borderRadius: "16px",
                        boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          component="div"
                          align="center"
                          fontWeight={"bold"}
                          className="image-text"
                        >
                          {subItem?.name}
                        </Typography>
                        <hr />
                        <Typography variant="body2">
                          {subItem?.toolTip}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                ))
              ) : (
                <Box
                  id="start"
                  height="100%"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    borderLeft: `3px solid ${colors.greenAccent[400]}`,
                    padding: "50px",
                    display: "grid",
                  }}
                  gridColumn="span 12"
                >
                  <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h1" color={colors.greenAccent[400]}>
                      Bookmarks
                    </Typography>
                    <Typography variant="h3" color={colors.grey[100]}>
                      <hr color={colors.greenAccent[400]} />
                      By selecting a category from the left side, you can view
                      the tools and resources available to you.
                    </Typography>
                    <br />
                    <br />
                    <Box
                      height="auto"
                      m="20px 0 0 10px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      className="xarrow-main"
                    >
                      <Xarrow
                        start="start"
                        end="grid1"
                        color={colors.greenAccent[400]}
                        dashness={{
                          strokeLen: 10,
                          nonStrokeLen: 5,
                          animation: -2,
                        }}
                      />
                    </Box>
                  </Grid>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Cards;
