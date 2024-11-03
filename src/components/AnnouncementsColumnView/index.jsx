import React from "react";
import {
  Box,
  Fade,
  Typography,
  Alert,
  AlertTitle,
  useTheme,
  Grid,
} from "@mui/material";
import { tokens } from "../../theme.js";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import "./styles.css";

const AnnouncementsColumnView = ({ content, setModalOpen, isOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const newsUpdates = content[0]?.NewUpdate;
  const maintenance = content[0]?.Maintenance;
  const issues = content[0]?.Issue;
  const faq = content[0]?.FAQ;

  return (
    <Fade in={isOpen} className="fade">
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          width: "85%",
          marginLeft: "7%",
          boxShadow: 1,
       
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
      
        >
          <Grid item>
            <Grid    paddingBottom={5}
              container
              spacing={0}
              direction="column"
              alignItems="flex-end"
              justifyContent="flex-end"
              borderRadius={5}
              backgroundColor={colors.primary[400]}
              sx={{
                boxShadow: '0px 4px 12px rgba(1, 1, 1, 1)', 
              }}
            >
              <Grid item xs={3}>
                <IconButton
                  className="cancel-btn"
                  aria-label="cancel"
                
                  onClick={() => setModalOpen(false)}
                >
                  <CancelIcon />
                </IconButton>
              </Grid>
              <Grid
                container
                className="grid-announcements container"
                backgroundColor={colors.primary[400]}
                borderRadius={5}
              >
                {/* Information */}
                <Grid item xs={3}>
                  <Alert
                    severity="info"
                    className="hide-scrollbars"
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <AlertTitle sx={{ fontSize: "16px" }}>
                      <strong>New Updates</strong>
                    </AlertTitle>
                    <hr />
                    {newsUpdates && newsUpdates.length > 0 ? (
                      newsUpdates.map((contentText, index) => (
                        <div key={index}>
                          <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontSize="15px"
                            className="content-text"
                          >
                            {contentText.title}: {contentText.description}
                          </Typography>
                          <hr />
                        </div>
                      ))
                    ) : (
                      <Typography
                        color={colors.grey[100]}
                        variant="body2"
                        fontSize="15px"
                        paddingLeft="15px"
                      >
                        No updates reported.
                      </Typography>
                    )}
                  </Alert>
                </Grid>
                <hr style={{ margin: "5px 0" }} />
                {/* Maintenance */}
                <Grid item xs={3}>
                  <Alert
                    severity="warning"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AlertTitle sx={{ fontSize: "16px" }}>
                      <strong>Maintenance</strong>
                    </AlertTitle>
                    <hr />
                    {maintenance && maintenance.length > 0 ? (
                      maintenance.map((contentText, index) => (
                        <div key={index}>
                          <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontSize="15px"
                            className="content-text"
                          >
                            {contentText.title}: {contentText.description}
                          </Typography>
                          <hr />
                        </div>
                      ))
                    ) : (
                      <Typography
                        color={colors.grey[100]}
                        variant="body2"
                        fontSize="15px"
                        paddingLeft="15px"
                      >
                        No updates reported.
                      </Typography>
                    )}
                  </Alert>
                </Grid>
                <hr style={{ margin: "5px 0" }} />
                {/* Error */}
                <Grid item xs={3}>
                  <Alert
                    severity="error"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AlertTitle sx={{ fontSize: "16px" }}>
                      <strong>Issues/Error</strong>
                    </AlertTitle>
                    <hr />
                    {issues && issues.length > 0 ? (
                      issues.map((contentText, index) => (
                        <div key={index}>
                          <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontSize="15px"
                            className="content-text"
                          >
                            {contentText.title}: {contentText.description}
                          </Typography>
                          <hr />
                        </div>
                      ))
                    ) : (
                      <Typography
                        color={colors.grey[100]}
                        variant="body2"
                        fontSize="15px"
                        paddingLeft="15px"
                      >
                        No updates reported.
                      </Typography>
                    )}
                  </Alert>
                </Grid>
                <hr style={{ margin: "5px 0" }} />
                {/* ROW 2 - FAQ*/}
                <Grid item xs={2}>
                  <Alert
                    severity="success"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <AlertTitle sx={{ fontSize: "16px" }}>
                      <strong>FAQ</strong>
                    </AlertTitle>
                    <hr />
                    {faq && faq.length > 0 ? (
                      <ul style={{ paddingLeft: "15px" }}>
                        {faq.map((contentText, index) => (
                          <li key={index} style={{ listStyleType: "square" }}>
                            <a
                              href={contentText.url}
                              target="_blank"
                              className="faq-link"
                              rel="noreferrer"
                            >
                              <Typography
                                color={colors.grey[100]}
                                variant="body2"
                                fontSize="15px"
                                className="content-text"
                              >
                                {contentText.title}
                              </Typography>
                              <hr />
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Typography
                        color={colors.grey[100]}
                        variant="body2"
                        fontSize="15px"
                        paddingLeft="15px"
                      >
                        No FAQ.
                      </Typography>
                    )}
                  </Alert>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default AnnouncementsColumnView;
