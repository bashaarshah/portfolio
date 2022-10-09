import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Work from './pages/Work'
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate as Redirect
} from "react-router-dom";
import { pages } from './config';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <br />
        <Container>
          <Routes>
            {pages.map(({label, location, component, href}) =>
              <Route exact path={location} element={href ? <Redirect push to={href} /> : component} />
            )}
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
