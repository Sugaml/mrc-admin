import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export const  Deposits=()=> {
  return (
    <React.Fragment>
      <Title>Recent Revenue</Title>
      <Typography component="p" variant="h4">
        $324.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 Dec, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
