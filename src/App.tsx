import React from 'react';
import { Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';

import './App.css';

function App(): React.ReactElement {
  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Typography>
          Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.
          </Typography>
          <Typography>
          Takamaru Ayako
          </Typography>
          <Typography>Manager an inVision</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography component="h2">
          Create new account
          </Typography>
          <Typography component="span">
          Use your work email to create new account... it's free.
          </Typography>
          <form>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="First Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Last Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email Address" type="email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type="password" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography>I have read the <a href="#">Terms and Conditions</a>.</Typography>}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth><Typography>SIGN UP NOW</Typography></Button>
            </Grid>
            <Grid item xs={12}>
              <Typography>Have an account? <a href="#">Sign In</a></Typography>
            </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
