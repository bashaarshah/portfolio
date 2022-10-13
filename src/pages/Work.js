import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { work } from '../config'
import MediaCard from '../components/MediaCard';
import { Typography } from '@mui/material';


export default function Work() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Typography
          variant="h4"
          color="white"
        >Welcome.
        </Typography>
        <Grid container>
          <Typography
            variant="h6"
            color="gray"
          >My Name is Bashaar Shah.
          </Typography>
          <Grid container>
            <Typography
            variant="h6"
            color="white"
            >I am currently a software engineer for Ford Motor Company. Previously worked at Doxim, Comerica, and MicroCenter.
            </Typography>
            </Grid>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
      >
        {work.map((card) => { return <Grid item xs={12} sm={7} md={6}> <MediaCard {...card} /></Grid> })}
      </Grid>
    </Box>)
}