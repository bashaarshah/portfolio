import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Work from './pages/Work'
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <Container>
      <Work />
      </Container>
       
       
    </div>
  );
}

export default App;
