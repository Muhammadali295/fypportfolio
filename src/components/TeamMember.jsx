import React from 'react';
import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const TeamMember = ({ name, role, linkedIn, github, cvLink, email, contactNumber, portfolio, picture }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <img src={picture} alt={`${name}'s picture`} style={{ width: '100%', borderRadius: '8px' }} />
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact: {contactNumber}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
          {linkedIn && (
            <IconButton href={linkedIn} target="_blank" color="primary">
              <LinkedInIcon />
            </IconButton>
          )}
          {github && (
            <IconButton href={github} target="_blank" color="primary">
              <GitHubIcon />
            </IconButton>
          )}
          {portfolio && (
            <IconButton href={portfolio} target="_blank" color="primary">
              <Button variant="contained">Portfolio</Button>
            </IconButton>
          )}
        </Box>
        {cvLink && (
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            href={cvLink}
            target="_blank"
            sx={{ mt: 2 }}
          >
            Download CV
          </Button>
        )}
      </CardContent>
    </Card>
  );
};


export default TeamMember; 