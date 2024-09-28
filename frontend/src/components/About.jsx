import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import ScrollTrigger from 'react-scroll-trigger';
import { styled } from '@mui/system';
import backgroundImage from '../assets/background.jpg';  // Ensure this path is correct

// Styled components
const AboutSection = styled(Box)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(200px)', // Start 50px down
  transition: 'all 4s cubic-bezier(0.25, 0.6, 0.25, 1)', // Smooth transition
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)', // Move to original position
  },
}));

const About = () => {
  const [visible, setVisible] = useState(false);

  const handleEnterViewport = () => {
    setVisible(true);
  };

  return (
    <ScrollTrigger onEnter={handleEnterViewport}>
      <Box
        sx={{
          height: '100vh',  // Ensure full viewport height
          display: 'flex',
          flexDirection: 'column', // Center the content horizontally
          backgroundImage: `url(${backgroundImage})`,  // Set the background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: 0,
          padding: 0,  // Remove any padding
          boxSizing: 'border-box',
          
        }}
        
      >
        <AboutSection className={visible ? 'visible' : ''} mt={5}>
          <Typography marginLeft={{xs:5,md:15}} marginRight={{xs:5,md:15}} marginTop={5} color='white' variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography marginLeft={{xs:5,md:15}} marginRight={{xs:5,md:15}} color='white' variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus officiis quam eaque, praesentium adipisci dolor voluptates dolores magni! Consequuntur a quidem placeat velit doloremque voluptate quia ratione repellendus. Magni saepe rerum, vero reprehenderit quas labore pariatur inventore dignissimos voluptatum molestiae obcaecati recusandae doloribus? In ipsum nihil omnis magni, quod eos id. Nesciunt corrupti repudiandae nam odit commodi. Excepturi, dignissimos eius suscipit molestias eligendi odit labore necessitatibus earum magni amet nihil numquam iusto, quo quas ipsum ea eaque natus asperiores deserunt iste sit itaque. Quae, quo? Consectetur dolor impedit illo mollitia corrupti sed quis voluptatum cumque possimus magnam, non ducimus sit asperiores nobis saepe repudiandae nostrum perspiciatis rem in. Nisi ratione ut dolore esse, magni natus impedit, aliquam odit maiores temporibus voluptatem, vitae nesciunt. Rem exercitationem iusto aliquam suscipit reprehenderit. At ex cum obcaecati cupiditate mollitia impedit? Quis quae, ratione rem fugiat facere magnam commodi facilis voluptatem distinctio natus ipsum in.
          </Typography>
        </AboutSection>
      </Box>
    </ScrollTrigger>
  );
};

export default About;
