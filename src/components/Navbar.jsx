import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Box } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ p: 0, display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5" sx={{ color: '#262626', fontWeight: 800 }}>Admin Dashboard</Typography>
          <Typography variant="subtitle1" sx={{ color: '#FAA4BD' }}>Manage users & monitor activity</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button sx={{ textTransform: 'none', bgcolor: '#8CCDED', color: '#262626' }}>New Campaign</Button>
          <Avatar alt="Admin" src="https://i.pravatar.cc/40?img=3" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
