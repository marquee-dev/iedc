import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import ScrollTrigger from "react-scroll-trigger";

// Styled components for the card
const ExperienceCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#292929", // Dark background
  color: "#ffffff", // White text color
  padding: "20px",
  margin: "20px 0", // Spacing between cards
  borderRadius: "15px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Shadow effect
  transition: "transform 0.3s ease, opacity 0.3s ease",
  opacity: 0,
  transform: 'translateY(50px)', // Start 50px down
  transition: 'all 4s cubic-bezier(0.25, 0.6, 0.25, 1)', // Smooth transition
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)', // Move to original position
  },
  "&:hover": {
    transform: "scale(1.05)", // Lift effect on hover
  },
}));

const ExperienceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "120vh",
  backgroundColor: "#121212",
  padding: "40px",
}));

const Experiences = () => {
  const [visible, setVisible] = useState(false);

  const handleEnterViewport = () => {
    setVisible(true);
  };

  const members = [
    {
      name: "John Doe",
      position: "Chief Executive Officer",
      yearsWorked: "2018 - 2022",
      saying: "My time at the organization was filled with growth and learning. I had the chance to work with a fantastic team.",
    },
    {
      name: "Akshitha D Sarangi",
      position: "Project Manager",
      yearsWorked: "2017 - 2021",
      saying: "The projects I handled taught me so much. I couldn't have asked for a better environment to develop my skills.",
    },
    {
      name: "Jofin Victor",
      position: "Marketing Head",
      yearsWorked: "2019 - 2023",
      saying: "Leading marketing campaigns was a rewarding experience. It allowed me to connect with great clients and a vibrant team.",
    },
  ];

  return (
    <ExperienceContainer>
      <Typography mt={5} variant="h4" color="white" gutterBottom>
        Previous Member Sayings
      </Typography>
      {members.map((member, index) => (
        <ScrollTrigger key={index} onEnter={handleEnterViewport}>
          <ExperienceCard sx={{width:{xs:'80vw',md:'60vw'}}} className={visible ? "visible" : ""}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {member.position} | {member.yearsWorked}
              </Typography>
              <Typography variant="body1" mt={2} style={{ fontStyle: "italic" }}>
                "{member.saying}"
              </Typography>
            </CardContent>
          </ExperienceCard>
        </ScrollTrigger>
      ))}
    </ExperienceContainer>
  );
};

export default Experiences;
