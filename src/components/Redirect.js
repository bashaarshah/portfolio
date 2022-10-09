import { Typography, Button, Grid } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

export default function Redirect({ href, target = "_blank" }) {
    setTimeout(() => {
        window.open(href, target) // open the redirect
        window.location.href = "/" // go back to the home page
    }, 3000) // do all that in 3 seconds
    return <Grid container direction="column"
        justifyContent="center"
        alignItems="center">
        <Grid item>
            <Typography color="white">
                Redirecting to <Link color='primary' to={href}>{href}</Link>
            </Typography>
        </Grid>
        <Grid item sx={{ width: "50%", marginBottom: 5, marginTop: 5 }}>
            <LinearProgress />
        </Grid>
        <Grid item>
            <Button onClick={() => { window.location.href = "/" }}>Cancel</Button>
        </Grid>
    </Grid>
} 