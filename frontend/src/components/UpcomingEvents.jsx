import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import ScrollTrigger from "react-scroll-trigger";
import { styled } from "@mui/system";

// Styled components
const EventCard = styled(Card)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(200px)',
  transition: 'all 4s cubic-bezier(0.25, 0.6, 0.25, 1)',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
}));

const EventsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '16px',
}));

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/events"); // Fetch events from the backend
        setEvents(response.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  const handleEnterViewport = () => {
    setVisible(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <Typography mt={5} variant="h4" color="white" gutterBottom>
        Upcoming Events
      </Typography>
      <EventsContainer mt={5}>
        {events.map((event, index) => (
          <ScrollTrigger key={index} onEnter={handleEnterViewport}>
            <EventCard sx={{ width: { xs: '40vw', md: '20vw' } }} className={visible ? "visible" : ""}>
              <CardMedia
                component="img"
                height="140"
                image={event.image} // Event image from the backend
                alt={event.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${event.price}
                </Typography>
              </CardContent>
            </EventCard>
          </ScrollTrigger>
        ))}
      </EventsContainer>
    </Box>
  );
};

export default UpcomingEvents;
