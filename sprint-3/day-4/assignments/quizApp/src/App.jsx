import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './components/Login';
import Quiz from './components/Quiz';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Quiz/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
