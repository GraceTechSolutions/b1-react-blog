import React, { useEffect, useState } from 'react';
import { CardContent, Card as Card_, CardHeader, Typography, CardActions } from '@mui/material';
import { Button, Avatar } from '@mui/material';
import axios from 'axios';


export default function Card(props) {
  let {blog, user} = props
  let ref = `blog/${blog.id}`
  // let subTitle = `Blog ID: ${blog.id} | User ID: ${blog.userId}`
  // console.log(user);
  return(
      <Card_>
          <CardHeader
          avatar={
            <Avatar alt=''/>
          }
          // title={user.name || ''}
          // subheader={user.email || ''}
          />
          <CardContent>
            <Typography variant='h5'>{blog.title}</Typography>
            <Typography variant='subtitle1'>Sports</Typography>
            <Typography sx={{marginTop: '10px'}}>{blog.body}</Typography>
          </CardContent>
          <CardActions>
            <Button href={ref}>Read More</Button>
          </CardActions>
      </Card_>
  );
}
