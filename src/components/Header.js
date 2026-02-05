// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/tenants">Tenants</Button>
        <Button color="inherit" component={Link} to="/maintenance">Maintenance</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
