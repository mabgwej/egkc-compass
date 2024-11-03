import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import AnnouncementModal from "../AnnouncementModal";
import DBModal from "../DBModal";
import StorageModal from "../StorageModal";
import FinOps from "../FinOps";
import CloudAnnouncementModal from "../CloudAnnouncementModal";
import IntelligentAutomation from "../IntelligentAutomation";
import ObservabilityAnnouncements from "../ObservabilityAnnouncements";
import { tokens } from "../../../../theme";
import { blue } from "@mui/material/colors";
import Xarrow from "react-xarrows";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ErrorOutlineIcon from "@mui/icons-material/Error";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';

import HelpOutlineIcon from '@mui/icons-material/Help';




const TopCards = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalCloudOpen, setModalCloudOpen] = useState(false);
  const [modalIntelligentOpen, setModalIntelligentOpen] = useState(false);
  const [modalObservabilityOpen, setModalObservabilityOpen] = useState(false);
  const [modalDBOpen, setModalDBOpen] = useState(false);
  const [modalStorageOpen, setModalStorageOpen] = useState(false);
  const [modleFinOpsOpen, setModalFinOpsOpen] = useState(false);
  const [contentData, setData] = useState({
    KEY1: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
    KEY2: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
    KEY3: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
    KEY4: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
    KEY5: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
    KEY6: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },

    KEY7: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
        /*
    KEY8: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
    KEY9: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
    KEY10: {
      NewUpdate: 0,
      Maintenance: 0,
      Issue: 0,
      FAQ: 0,
    },
    */
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ANNOUNCEMENT_URL}/count/total`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setData({
        KEY1: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
        KEY2: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
        KEY3: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
        KEY4: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
        KEY5: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
        KEY6: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
       KEY7: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
            /*
        KEY8: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
        KEY9: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
        KEY10: {
          NewUpdate: 0,
          Maintenance: 0,
          Issue: 0,
          FAQ: 0,
        },
        */
      });
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 300000);
    return () => clearInterval(intervalId);
  }, []);

  const key1 = contentData?.KEY1;
  const key2 = contentData?.KEY2;
  const key3 = contentData?.KEY3;
  const key4 = contentData?.KEY4;
  const key5 = contentData?.KEY5;
  const key6 = contentData?.KEY6;
  const key7 = contentData?.KEY7;
 // const key8 = contentData?.KEY8;
 // const key9 = contentData?.KEY9;
 // const key10 = contentData?.KEY10;

  const handleCardClick = (URL) => {
    window.open(URL, "Loading...");
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleCloudModalOpen = () => {
    setModalCloudOpen(true);
  };

  const handleIntelligentOpen = () => {
    setModalIntelligentOpen(true);
  };

  const handleObservabilityOpen = () => {
    setModalObservabilityOpen(true);
  };

  const handleDBOpen = () => {
    setModalDBOpen(true);
  };
  const handleStorageOpen = () => {
    setModalStorageOpen(true);
  };
  const handleFinOpen = () => {
    setModalFinOpsOpen(true);
  };

  return (
    <Box>
      <Box>
        <Box


          display="flex"
          justifyContent="space-between"
          alignItems="center"
        ></Box>

        <Box

          display="flex"
        
         
          padding="10px"
        >

<Grid container direction="row" alignItems="top"  >


          <Grid item xs={2} margin="3px">   
          <Card
            id="devops1"
            sx={{
              color: "white",
              backgroundColor: blue[400],
              opacity: 0.8,
              ":hover": {
                backgroundColor: blue[800],
              },
              marginLeft: "3%",
              
              
              
              borderRadius: "16px",
              boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.8)",
            }}

          >


            <Accordion sx={{ backgroundColor: 'transparent' }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  paddingTop={2}
                  paddingBottom={2}
                  fontWeight="bold"
                  onClick={() => handleCardClick("https://devops-dashboard.albertsons.com/")}
                  sx={{ cursor: 'pointer' }}   >
                  Developer Enablement
                </Typography>

              </AccordionSummary>
              <AccordionDetails>

                <Typography variant="h5">
                  A comprehensive dashboard providing a unified view of software
                  development and operational activities, along with self-service
                  tools for Developers. Capabilities include:
                  <ul>
                    <li>Self-Service automation</li>
                    <li>KPI Reports</li>
                    <li>Security, Compliance, and Quality Reports</li>
                  </ul>
                </Typography>

              </AccordionDetails>
            </Accordion>

            {/* Key1 */}
            <CardContent
              sx={{
                color: "white",

                cursor: 'pointer'

              }}
              onClick={() => handleModalOpen()}
            >

              <Grid container direction="row" alignItems="center">
                <NotificationsIcon sx={{ color: 'rgb(2.737427%, 25.424194%, 54.78363%)' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  New Updates = {key1.NewUpdate}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ReportProblemIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Maintenance = {key1.Maintenance}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center" >
                <ErrorOutlineIcon sx={{ color: 'orange' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Issues/Error = {key1.Issue}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <HelpOutlineIcon sx={{ color: 'lightgreen' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  FAQ = {key1.FAQ}
                </Typography>
              </Grid>
              <hr />
            </CardContent>

          </Card>
          </Grid>

          <Grid item xs={2} margin="3px">   
          <Card
            id="cse1"
            sx={{
              color: "white",
              backgroundColor: blue[400],
              opacity: 0.8,
              ":hover": {
                backgroundColor: blue[800],
              },
              marginLeft: "3%",
              
              
              
              borderRadius: "16px",
              boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.8)",
            }}

          >



            <Accordion sx={{ backgroundColor: 'transparent' }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}    >
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  paddingTop={2}
                  paddingBottom={2}
                  paddingLeft={1}
                  fontWeight="bold"
                  onClick={() =>
                    handleCardClick("https://devportal.albertsons.com/dashboard")
                  }>Cloud Core
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">
                  
                An intuitive Portal to meet your environment provisioning,
                  environment management, and related reporting needs through
                  automation and cloud environment self-service.

                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Key2 */}
            <CardContent
              id="cse2"
              sx={{
                color: "white",

                cursor: 'pointer'

              }}
              onClick={() => handleCloudModalOpen()}
            >

              <Grid container direction="row" alignItems="center">
                <NotificationsIcon sx={{ color: 'rgb(2.737427%, 25.424194%, 54.78363%)' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  New Updates = {key2.NewUpdate}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ReportProblemIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Maintenance = {key2.Maintenance}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ErrorOutlineIcon sx={{ color: 'orange' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Issues/Error = {key2.Issue}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <HelpOutlineIcon sx={{ color: 'lightgreen' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  FAQ = {key2.FAQ}
                </Typography>
              </Grid>
              <hr />
            </CardContent>

          </Card>
          </Grid>

          <Grid item xs={2} margin="3px">   
          <Card
            sx={{
              color: "white",
              backgroundColor: blue[400],
              opacity: 0.8,
              ":hover": {
                backgroundColor: blue[800],
              },
              marginLeft: "3%",
              
              
              
              borderRadius: "16px",
              boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.8)",
            }}

          >

            <Accordion sx={{ backgroundColor: 'transparent' }} >
              <AccordionSummary

                expandIcon={<ExpandMoreIcon />}

              >
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  fontWeight={"bold"}
                  className="image-text"
                  onClick={() =>
                    handleCardClick(
                      "https://app.powerbi.com/groups/me/reports/c9b9d7c3-d126-4266-bc2f-fd8775da89b3/ReportSection?experience=power-bi"
                    )
                  }
                  paddingTop={2}

                  paddingBottom={2}
                  sx={{ cursor: 'pointer' }}
                >
                  Intelligent Automation
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">
                  A developing dashboard providing several dashboards for IA
                  operations and KPIs, along with self-service portal access for
                  on demand IOT control. Capabilities include:
                  <ul>
                    <li>Command and Control Automation</li>
                    <li>IOT Insights</li>
                    <li>KPI Reports</li>
                    <li>Development Intake Portal</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Key3 */}
            <CardContent
              sx={{
                color: "white",

                cursor: 'pointer'

              }}
              onClick={() => handleIntelligentOpen()}
            >

              <Grid container direction="row" alignItems="center">
                <NotificationsIcon sx={{ color: 'rgb(2.737427%, 25.424194%, 54.78363%)' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  New Updates = {key3.NewUpdate}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ReportProblemIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Maintenance = {key3.Maintenance}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ErrorOutlineIcon sx={{ color: 'orange' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Issues/Error = {key3.Issue}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <HelpOutlineIcon sx={{ color: 'lightgreen' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  FAQ = {key3.FAQ}
                </Typography>
              </Grid>
              <hr />
            </CardContent>

          </Card>
          </Grid>

          <Grid item xs={2} margin="3px" >   
          <Card
            sx={{
              color: "white",
              backgroundColor: blue[400],
              opacity: 0.8,
              ":hover": {
                backgroundColor: blue[800],
              },
              marginLeft: "3%",
              
              
              
              borderRadius: "16px",
              boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.8)",
            }}

          >
            <Accordion sx={{ backgroundColor: 'transparent' }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}>
                <Typography

                  variant="h5"
                  component="div"
                  paddingTop={2}
                  paddingLeft={1}
                  paddingBottom={2}
                  align="center"
                  fontWeight={"bold"}
                  className="image-text"
                  onClick={() =>
                    handleCardClick("https://observability.albertsons.com/")
                  }
                >
                  Observability
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">
                  Our Observability Platform is our Enterprise solution built on
                  Open Source Grafana Stack to provide a single-pane view across
                  Business Domains, Applications, Platforms and Infrastructure
                  data which can be then analyzed, visualized, co-related and
                  alerted upon. It gives teams across the company better
                  visibility to take proactive actions, while significantly
                  enhancing reactive actions to reduce MTTR.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Key4 */}
            <CardContent
              sx={{
                color: "white",

                cursor: 'pointer'

              }}
              onClick={() => handleObservabilityOpen()}
            >

              <Grid container direction="row" alignItems="center">
                <NotificationsIcon sx={{ color: 'rgb(2.737427%, 25.424194%, 54.78363%)' }} />
                <Typography variant="body2" marginLeft="10px">
                  New Updates = {key4.NewUpdate}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ReportProblemIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Maintenance = {key4.Maintenance}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ErrorOutlineIcon sx={{ color: 'orange' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Issues/Error = {key4.Issue}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <HelpOutlineIcon sx={{ color: 'lightgreen' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  FAQ = {key4.FAQ}
                </Typography>
              </Grid>
              <hr />
            </CardContent>

          </Card>
          </Grid>

          <Grid item xs={2} margin="3px"  >   
          <Card
            id="cse1"
            sx={{
              color: "white",
              backgroundColor: blue[400],
              opacity: 0.8,
              ":hover": {
                backgroundColor: blue[800],
              },
              marginLeft: "3%",
              
              
              
              borderRadius: "16px",
              boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.8)",
            }}

          >



            <Accordion sx={{ backgroundColor: 'transparent' }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}    >
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  paddingTop={2}
                  paddingBottom={2}
                  paddingLeft={1}
                  fontWeight="bold"
                  onClick={() =>
                    handleCardClick("https://confluence.safeway.com/display/Database/Database+Products+Home")
                  }>Database Platform
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">
                  The Database platform is an enterprise shared services platform,
                  the core principle of the platform team is SaaS First, PaaS and Next,
                  IaaS as Last. The key focus of this team is to product engineering,
                  preparing roadmap, selection, onboard,
                  automation and end-to-end alignment with standards and security guidelines.
                  The platform engineering focuses on maintaining and support deployed products.
             
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Key5 */}
            <CardContent
              id="db"
              sx={{
                color: "white",

                cursor: 'pointer'

              }}
              onClick={() => handleDBOpen()}
            >

              <Grid container direction="row" alignItems="center">
                <NotificationsIcon sx={{ color: 'rgb(2.737427%, 25.424194%, 54.78363%)' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  New Updates = {key5.NewUpdate}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ReportProblemIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Maintenance = {key5.Maintenance}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ErrorOutlineIcon sx={{ color: 'orange' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Issues/Error = {key5.Issue}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <HelpOutlineIcon sx={{ color: 'lightgreen' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  FAQ = {key5.FAQ}
                </Typography>
              </Grid>
              <hr />
            </CardContent>

          </Card>
          </Grid>
          
          <Grid item xs={2} margin="3px">   
          <Card
            id="cse1"
            sx={{
              color: "white",
              backgroundColor: blue[400],
              opacity: 0.8,
              ":hover": {
                backgroundColor: blue[800],
              },
              marginLeft: "3%",
              
              
              
              borderRadius: "16px",
              boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.8)",
            }}

          >



            <Accordion sx={{ backgroundColor: 'transparent' }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}    >
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  paddingTop={2}
                  paddingBottom={2}
                  paddingLeft={1}
                  fontWeight="bold"
                  onClick={() =>
                    handleCardClick("https://confluence.safeway.com/display/SDP/Storage+and+Data+Protection+-+Home+Page")
                  }>Storage   Platform
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">
                  The Storage and Data Protection platform
                  are being used to store unstructured
                  data across the enterprise,
                  protect and make data available
                  under all circumstances especially in the event of data loss or interruption.
                  Safeguarding important data from corruption,
                  compromise or loss and providing the capability
                  to restore the data to a functional state.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Key6 */}
            <CardContent
              id="storage"
              sx={{
                color: "white",

                cursor: 'pointer'

              }}
              onClick={() => handleStorageOpen()}
            >

              <Grid container direction="row" alignItems="center">
                <NotificationsIcon sx={{ color: 'rgb(2.737427%, 25.424194%, 54.78363%)' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  New Updates = {key6.NewUpdate}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ReportProblemIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Maintenance = {key6.Maintenance}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ErrorOutlineIcon sx={{ color: 'orange' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Issues/Error = {key6.Issue}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <HelpOutlineIcon sx={{ color: 'lightgreen' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  FAQ = {key6.FAQ}
                </Typography>
              </Grid>
              <hr />
            </CardContent>

          </Card>
          </Grid>
          <Grid item xs={2} margin="3px">   
          <Card
            id="cse1"
            sx={{
              color: "white",
              backgroundColor: blue[400],
              opacity: 0.8,
              ":hover": {
                backgroundColor: blue[800],
              },
              marginLeft: "3%",
              
              
              
              borderRadius: "16px",
              boxShadow: "0px 40px 20px rgba(0, 0, 0, 0.8)",
            }}

          >



            <Accordion sx={{ backgroundColor: 'transparent' }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}    >
                <Typography
                  variant="h5"
                  component="div"
                  align="center"
                  paddingTop={2}
                  paddingBottom={2}
                  paddingLeft={1}
                  fontWeight="bold"
                  onClick={() =>
                    handleCardClick("https://app.flexera.com/login")
                  }>Cloud CoE
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">
                The Cloud Center of Excellence (CCoE) ensures robust cloud governance by setting policies and best practices for cloud usage and compliance with enterprise standards. It also includes FinOps to optimize cloud costs as well as IT Asset Management, charged in managing software assets and licenses for efficient utilization.  </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Key7 */}
            <CardContent
              id="finOps"
              sx={{
                color: "white",

                cursor: 'pointer'

              }}
              onClick={() => handleFinOpen()}
            >

              <Grid container direction="row" alignItems="center">
                <NotificationsIcon sx={{ color: 'rgb(2.737427%, 25.424194%, 54.78363%)' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  New Updates = {key7.NewUpdate}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ReportProblemIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Maintenance = {key7.Maintenance}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <ErrorOutlineIcon sx={{ color: 'orange' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  Issues/Error = {key7.Issue}
                </Typography>
              </Grid>
              <hr />
              <Grid container direction="row" alignItems="center">
                <HelpOutlineIcon sx={{ color: 'lightgreen' }} />
                <Typography variant="body2" marginLeft="10px" sx={{ fontWeight: 'bold' }}>
                  FAQ = {key7.FAQ}
                </Typography>
              </Grid>
              <hr />
            </CardContent>

          </Card>
          </Grid>
         
          <Grid item xs={2} margin="3px"  > 
            </Grid>
            <Grid item xs={2} margin="3px" > 
            </Grid>
          <Grid item xs={2} margin="3px"  id="portalsEnd"> 
            </Grid>
        </Grid>  
        
          <Box
            id="portalsStart"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            marginright="1%"
            padding="1%"
            width="15%"
            style={{
              borderLeft: `3px solid ${colors.greenAccent[400]}`,
              margin: "10px",
            }}
          >
            <Typography variant="h2" color={colors.greenAccent[400]}>
              Product Portals
            </Typography>
            <Typography variant="h3" color="white">
              <hr color={colors.greenAccent[400]} />
              By selecting a category from the left side, you can access Home
              Pages for Product Portals. Or selecting a portal announcement, you
              can view the latest updates.
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              className="xarrow-main"
            >
              <Xarrow
                start="portalsStart"
                end="portalsEnd"
                color={colors.greenAccent[400]}
                dashness={{
                  strokeLen: 10,
                  nonStrokeLen: 5,
                  animation: -2,
                }}
              />

            </Box>
          </Box>
        </Box>

        <Box
          backgroundColor={colors.grey[100]}
          display="flex"
          flexWrap="nowrap"
          overflowX="auto"

        >







          <Box


            display="flex"
            justifyContent="center"
            alignItems="center"
            className="xarrow-main"
          ></Box>
        </Box>
        <AnnouncementModal isOpen={modalOpen} setModalOpen={setModalOpen} />
        <CloudAnnouncementModal
          isOpen={modalCloudOpen}
          setModalOpen={setModalCloudOpen}
        />
        <IntelligentAutomation
          isOpen={modalIntelligentOpen}
          setModalOpen={setModalIntelligentOpen}
        />
        <ObservabilityAnnouncements
          isOpen={modalObservabilityOpen}
          setModalOpen={setModalObservabilityOpen}
        />
        <DBModal
          isOpen={modalDBOpen}
          setModalOpen={setModalDBOpen}
        />
        <StorageModal
          isOpen={modalStorageOpen}
          setModalOpen={setModalStorageOpen}
        />
        <FinOps
          isOpen={modleFinOpsOpen}
          setModalOpen={setModalFinOpsOpen}
        />

      </Box>
    </Box>
  );
};

export default TopCards;
