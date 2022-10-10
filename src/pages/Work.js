import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { work } from '../config'
import MediaCard from '../components/MediaCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Work() {
  return (<Box sx={{ flexGrow: 1 }}>
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={4}
    >
      {work.map((card) => { return <Grid item xs={12} sm={7} md={6}> <MediaCard {...card} /></Grid> })},
    </Grid>
  </Box>)
}