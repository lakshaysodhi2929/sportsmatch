import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

const sports = [
  {
    name: 'Football',
    icon: <SportsSoccerIcon sx={{ fontSize: 60 }} />,
    description: 'Join football matches in your area',
  },
  {
    name: 'Basketball',
    icon: <SportsBasketballIcon sx={{ fontSize: 60 }} />,
    description: 'Find basketball courts and players',
  },
  {
    name: 'Tennis',
    icon: <SportsTennisIcon sx={{ fontSize: 60 }} />,
    description: 'Book tennis courts and find partners',
  },
  {
    name: 'Cricket',
    icon: <SportsCricketIcon sx={{ fontSize: 60 }} />,
    description: 'Organize cricket matches and tournaments',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to SportsMatch
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Find, create, and join sports matches in your area
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/matches')}
            sx={{ mt: 4 }}
          >
            Find Matches
          </Button>
        </Container>
      </Box>

      {/* Sports Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Popular Sports
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {sports.map((sport) => (
            <Grid item key={sport.name} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', my: 2 }}>{sport.icon}</Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {sport.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {sport.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center">
            Why Choose SportsMatch?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Easy Match Creation
                  </Typography>
                  <Typography>
                    Create matches in seconds with our simple and intuitive interface.
                    Set your preferences and let others join.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Smart Matching
                  </Typography>
                  <Typography>
                    Our algorithm matches you with players of similar skill levels
                    and preferences.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Real-time Updates
                  </Typography>
                  <Typography>
                    Get instant notifications about match updates, new joins,
                    and cancellations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 