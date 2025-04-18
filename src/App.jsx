import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import TeamMember from './components/TeamMember';
import FYPDetails from './components/FYPDetails';
// import ali from './assets/a.jpg';
// import sameer from './assets/b.jpg';
// import nensi from './assets/d.jpg';

function App() {
  const teamMembers = [
    {
      name: "Muhammad Ali(Team Lead)",
      email: "muhammadaliayaan295@gmail.com",
      contactNumber: "03341300179",
      portfolio: "https://portfolio-h4pdnzq5e-muhammad-alis-projects-5543e715.vercel.app/",
      linkedIn: "https://www.linkedin.com/in/muhammad-ali-6a0815222",
      github: "https://github.com/Muhammadali295",
      cvLink: "https://drive.google.com/file/d/1TmWZACT6ZkDUAPdtC20vZmjK2w3S73L5/view?usp=drive_link",
      picture: ali,
    },
    {
      name: "Sameer Hussain",
      email: "sameerh64h@gmail.com",
      contactNumber: "+92 3278443240",
      portfolio: "https://portfolio-sw9p.vercel.app",
      linkedIn: "https://www.linkedin.com/in/sameer-hussain-75313023b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
      github: "https://github.com/sam12-4",
      cvLink: "https://drive.google.com/file/d/1y5QuftKYw_0ZW1pQKvXhgrAusmlGtGDm/view?usp=drivesdk ",
      picture: sameer
    },
    {
      name: "Muhammad Ali",
      email: "alinaseem21102002@gmail.com",
      contactNumber: "+92 3099412527",
      linkedIn: "https://www.linkedin.com/in/ali-naseem-4805162b7",
      cvLink: "https://drive.google.com/file/d/1xf9KSou_oqUIdG40gQYDBni2g_0I0v6S/view?usp=sharing "
    },
    {
      name: "Nensi Batra",
      email: "nensibatra1122@gmail.com",
      contactNumber: "03371244911",
      portfolio: "https://nensibatra1122.github.io/CodSoft/portfolio.html",
      linkedIn: "https://www.linkedin.com/in/nensi-batra-385115251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      cvLink: "https://drive.google.com/file/d/1gbCE1A1RUMtLhDJk6w1H3zV-JoB_4H-F/view?usp=drivesdk ",
      picture: nensi
    },
  ];

  const fypDetails = {
    title: "Your FYP Title",
    description: "A detailed description of your Final Year Project. Explain the problem you're solving, your approach, and the expected outcomes.",
    technologies: "React, Node.js, MongoDB, etc.",
    supervisor: "Supervisor Name"
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Our Team
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item key={index}>
              <TeamMember {...member} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <FYPDetails {...fypDetails} />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
