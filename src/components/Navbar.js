import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import classes from './scss/Navbar.module.scss';

export default function Navbar() {
    const links = ['Guide', 'Sponsor this project', 'Blog', 'My JSON Server'];
    
  return (
      <AppBar className={classes.main}>
          <Toolbar className={classes.nav}>
              <Typography className={classes.logo}>
                  JSONPlaceholder
              </Typography>
              <Box>
                  {links.map((link) => (
                      <Typography className={classes.pages} variant='h6'>{link}</Typography>
                  ))}
              </Box>
          </Toolbar>
      </AppBar>
  )
}
