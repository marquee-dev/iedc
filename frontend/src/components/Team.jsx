import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/system";
import ScrollTrigger from "react-scroll-trigger";
import Akshitha from '../assets/akshitha.jpg'
import Illyas from '../assets/illyas.jpg'
import Jofin from '../assets/jofin.jpg'

// Styled components
const TeamMemberCard = styled(Box)(({ theme }) => ({

  borderRadius: '12px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Shadow effect
  transition: 'transform 0.3s, box-shadow 0.3s',
  oopacity: 0,
  transform: 'translateY(200px)', // Start 50px down
  transition: 'all 4s cubic-bezier(0.25, 0.6, 0.25, 1)', // Smooth transition
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)', // Move to original position
  },
  '&:hover': {
    transform: 'translateY(-5px)', // Lift effect on hover
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Darker shadow on hover
  },
}));

const TeamContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height:'100vh',
  flexDirection: {xs:'column',md:'row'},
  justifyContent: 'space-around',
  backgroundColor:'black',
  alignItems:'center',
  flexWrap: 'wrap',
   // Margin around the container
  [theme.breakpoints.down('sm')]: {
    height:'180vh',
    flexDirection: 'column', // Change to column direction on smaller screens
    alignItems: 'center', // Center align on small screens
  },
}));

const Team = () => {
  const [visible, setVisible] = useState(false);

  const handleEnterViewport = () => {
    setVisible(true);
  };

  const teamMembers = [
    {
      name: "John Doe",
      image: Illyas,
      position: "Nodal Officer",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      name: "Akshitha D Sarangi",
      image: Akshitha,
      position: "Chief Executive Officer",
      linkedin: "http://linkedin.com/in/akshitha-d-sarangi-53a901228",
    },
    {
      name: "Jofin Victor",
      image: Jofin,
      position: "Chief Operating Officer",
      linkedin: "http://instagram.com/_joviko_?igshid=OGQ5ZDc2ODk2ZA==",
    },
  ];

  return (
    <TeamContainer>
      {teamMembers.map((member, index) => (
        <ScrollTrigger key={index} onEnter={handleEnterViewport}>
          <TeamMemberCard className={visible ? "visible" : ""} sx={{ width: '250px', margin: '20px' , backgroundColor:'#292929'}}>
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '100%', 
                height: 'auto', 
                borderRadius: '50%', 
                marginBottom: '15px', // Space below image
                border: '1px solid #f5f5f5', // Light border around image
              }} 
            />
            <Typography sx={{color:'white'}} variant="h6" mt={2}>
              {member.name}
            </Typography>
            <Typography sx={{color:'white'}} >
              {member.position}
            </Typography>
            <Box mt={1}>
              <IconButton
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                sx={{ '&:hover': { color: '#0077b5' } }} // LinkedIn color on hover
              >
                <LinkedInIcon />
              </IconButton>
              
            </Box>
          </TeamMemberCard>
        </ScrollTrigger>
      ))}
    </TeamContainer>
  );
};

export default Team;
