
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Product Management
          </Typography>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: 16 }}>
            Home
          </Link>
          <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>
            Add Product
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
