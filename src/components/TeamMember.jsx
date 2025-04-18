// Filepath: C:\FYP\ourweb\src\components\TeamMember.jsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar,
  Stack,
  Tooltip
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import WebIcon from '@mui/icons-material/Web';

const TeamMember = ({
  name,
  linkedIn,
  github,
  cvLink,
  email,
  contactNumber,
  portfolio,
  picture
}) => {
  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: 350,
        mx: 'auto',
        borderRadius: 4,
        p: 2,
        bgcolor: '#f9f9f9',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.03)'
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Avatar
          src={picture}
          alt={name}
          sx={{ width: 100, height: 100, border: '3px solid #1976d2' }}
        />
      </Box>

      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 0.5 }}>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          📧 {email}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          📱 {contactNumber}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          {linkedIn && (
            <Tooltip title="LinkedIn">
              <IconButton href={linkedIn} target="_blank" color="primary">
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          )}
          {github && (
            <Tooltip title="GitHub">
              <IconButton href={github} target="_blank" color="primary">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          )}
          {portfolio && (
            <Tooltip title="Portfolio">
              <IconButton href={portfolio} target="_blank" color="primary">
                <WebIcon />
              </IconButton>
            </Tooltip>
          )}
        </Stack>

        {cvLink && (
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            href={cvLink}
            target="_blank"
            sx={{ mt: 3 }}
            fullWidth
          >
            Download CV
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMember;



