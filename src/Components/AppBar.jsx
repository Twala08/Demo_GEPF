import React, { useState } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; 
import logoimg from '../Images/logo GEPF.png'


const AppBar = () => {
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);

  const handleAvatarMenuOpen = (event) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAvatarAnchorEl(null);
  };

  const handleNotificationsMenuOpen = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsMenuClose = () => {
    setNotificationsAnchorEl(null);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <MuiAppBar position="fixed">
      <Toolbar
        sx={{
          pr: '24px',// keep right padding when drawer closed
          bgcolor: '#FFFFFF', 
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, color: 'black' }}
        >
         GEPF form
        </Typography>
        <Link>
        <IconButton color="inherit" onClick={handleNotificationsMenuOpen}>
        <Button variant="contained" style={{ backgroundColor: '#93AB4F' }}>Home</Button>
        </IconButton>
        </Link>
        <Link>
        <IconButton color="inherit" onClick={handleNotificationsMenuOpen}>
        <Button variant="contained" style={{ backgroundColor: '#93AB4F' }}>Start</Button>
        </IconButton>
        </Link>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
