import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Backdrop } from "@mui/material";
import "./styles.css";
import Announcements from "../../../../components/AnnouncementsColumnView";

const ObservabilityAnnouncements = ({ isOpen, setModalOpen }) => {
  const [data, setData] = useState({
    NewUpdate: [],
    Maintenance: [],
    Issue: [],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_ANNOUNCEMENT_URL}/key4`
      );
      setData(JSON.parse(response.data));
    } catch (error) {
      console.error("Error fetching data: ", error);
      setData({
        NewUpdate: [],
        Maintenance: [],
        Issue: [],
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className="modal-style"
      >
        <Announcements
          content={data}
          setModalOpen={setModalOpen}
          isOpen={isOpen}
        />
      </Modal>
    </div>
  );
};

export default ObservabilityAnnouncements;
