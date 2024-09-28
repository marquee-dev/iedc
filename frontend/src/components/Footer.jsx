import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/system";

// Styled component for the footer
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#121212",
  height:'30vh',
  color: "white",
  padding: "20px",
  marginTop: "auto",
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: "20px",
  "& > *": {
    margin: "0 10px",
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#B0B0B0", // Light gray color for text
}));

const Footer = () => {
  return (
    <FooterContainer>
        
      {/* Social Media Icons */}
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <FooterLinks>
        <Box sx={{marginTop:'5vh',marginLeft:'5vh'}}>
        <Typography sx={{fontSize:'1.5rem'}}>Follow Us On</Typography>
        <IconButton
          href="https://www.linkedin.com/company/iedc-cec/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com/iedc.cec?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        </Box>
      </FooterLinks>

      {/* Contact Info */}
      <FooterLinks>
      <Box sx={{display:'flex',flexDirection:'column',marginTop:'5vh',marginRight:'5vh'}} >
            <Typography sx={{fontSize:'1.5rem'}}>Contact Us</Typography>
            
        <Link href="tel:+1234567890" color="inherit" underline="none">
          Mobile : +1234567890
        </Link>
        <Link href="mailto:info@yourwebsite.com" color="inherit" underline="none">
          E-mail : iedc@cectl.ac.in
        </Link>
        </Box>
      </FooterLinks>
      </Box>
      {/* Reserved Rights */}
      <FooterText sx={{textAlign:'center',marginTop:'5vh'}}>
        &copy; {new Date().getFullYear()} YourWebsite.com. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
