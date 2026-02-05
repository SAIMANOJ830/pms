// src/pages/Home.js
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Welcome to the Property Management System</Typography>
      <Button variant="contained" color="primary" component={Link} to="/tenants">
        Manage Tenants
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/maintenance" style={{ marginLeft: '10px' }}>
        Manage Maintenance Requests
      </Button>
    </Container>
  );
}

export default Home;
