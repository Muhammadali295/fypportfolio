import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import projectImage from '../assets/bg.jpg';

const FYPDetails = ({ title, description, technologies, supervisor }) => {
  return (
    <Card sx={{ maxWidth: 800, m: 2, p: 3 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Final Year Project
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={projectImage} alt="Project" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <Typography variant="h5" color="primary" gutterBottom>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Technologies Used:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {technologies}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Project Supervisor:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {supervisor}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FYPDetails; 